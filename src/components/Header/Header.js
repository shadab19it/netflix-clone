import Axios from "../../Services/axios";
import React, { useEffect, useState } from "react";
import requests from "../../Services/request";
import { base_url } from "../Row";
import "./Header.scss";

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
const Header = () => {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(requests.fetchNetflixOriginals);
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
    };
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header style={{ background: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }} className='banner'>
      <div className='banner_content'>
        <h1 className='movie_name'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner_btns'>
          <button className='banner_btn'>Play</button>
          <button className='banner_btn'>My List</button>
        </div>
        <h1 className='banner_desc'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner_fadeBottom'></div>
    </header>
  );
};

export default Header;
