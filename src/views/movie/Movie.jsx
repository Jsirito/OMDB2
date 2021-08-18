import React from "react";
import { useSelector } from "react-redux";

import "./Movie.css";

function Movie() {
  const movie = useSelector((state) => state.movie);
  return (
    <div className="container">
      <div className="movieContainer">
        <div className="imgContainer">
          <img className="img" src={movie.Poster} alt={movie.Title}/>
        </div>
        <div className="infoSectionContainer">
          <h1>{movie.Title}</h1>
          <div className="rating">Rtg {movie.imdbRating}</div>
          <h4>
            {movie.Released}, {movie.Director}
          </h4>
          <span className="minutes">{movie.Runtime}</span>
          <p className="type">{movie.Genre}</p>
          <h4>{movie.Actors}</h4>
          <div className="movie_desc">
            <p className="text">{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
