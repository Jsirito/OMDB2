import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

import "./MovieGrid.css";

function MovieGrid() {
  const movies = useSelector((state) => state.movies.Search);

  if (!movies) {
    return (
      <div>
        <h1> </h1>
      </div>
    );
  }

  return (
    <div className="moviesContainer">
      {movies.map((movie) => (
        <Card
          img={movie.Poster}
          title={movie.Title}
          imdbID={movie.imdbID}
          year={movie.Year}
          type={movie.Type}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
