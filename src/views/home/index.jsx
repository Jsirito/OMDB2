import React from "react";

import "./index.css"

import SearchBar from "../../components/SearchBar/SearchBar"
import MovieGrid from "../../components/MovieGrid/MovieGrid";
function Home() {
  return (
    <div className="homeContainer">
      <SearchBar />
      <MovieGrid />
    </div>
  );
}

export default Home;
