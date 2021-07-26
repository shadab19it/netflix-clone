import React, { useState, useEffect } from "react";
import axios from "../Services/axios";
import "./Row.scss";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
export const base_url = "https://image.tmdb.org/t/p/original/";

const Rows = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const { data } = await axios.get(fetchURL);
        setMovies(data.results);
        return data;
      } catch (err) {
        console.log("errr" + err);
      }
    };

    getMovieData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          console.log(url);
          const urlPrams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlPrams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={`row `}>
      <h2 className='row_title'>{title}</h2>
      <div className='row_posters'>
        {movies.map((m, i) => {
          return (
            <img
              onClick={() => handleClick(m)}
              key={m.id}
              src={`${base_url}${isLargeRow ? m.poster_path : m.backdrop_path}`}
              alt=''
              className={`poster ${isLargeRow && "poster_large"}`}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Rows;
