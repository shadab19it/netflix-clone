/** @format */

import React, { useState } from "react";

import "./App.scss";
import requests, { getMovieData } from "./Services/request";
import instance from "./Services/axios";
import Header from "./components/Header/Header";
import Row from "./components/Row";
import Nav from "./components/Nav/Nav";

const App = () => {
  const [state, setState] = useState([]);

  return (
    <div className='app'>
      <Nav />
      <Header />
      <Row title='NETFILX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title='TRENDING NOW' fetchURL={requests.fetchTopRated} />
      <Row title='TOP RATED' fetchURL={requests.fetchTopRated} />
      <Row title='ACTION MOVIE' fetchURL={requests.fetchActionMovies} />
      <Row title='COMEDY MOVIE' fetchURL={requests.fetchComedyMovies} />
      <Row title='HORROR MOVIE' fetchURL={requests.fetchHorrorMovies} />
      <Row title='ROMANCE MOVIE' fetchURL={requests.fetchRomanceMovies} />
      <Row title='DOCUMENTRIES' fetchURL={requests.fetchDocumetries} />
    </div>
  );
};

export default App;
