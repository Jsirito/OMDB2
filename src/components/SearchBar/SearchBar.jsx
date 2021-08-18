import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SearchBar.css";
import { getMoviesRequest } from "../../state/actions/movies";

function SearchBar() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.Search);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getMoviesRequest(input));
  };

  return (
    <div className="searchBarContainer">
      <h1>Let's find a Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="searchInputContainer">
          <input
            className="input"
            type="text"
            placeholder="Type to Search..."
            value={input}
            onChange={handleChange}
          />
          <button className="btn-search" onClick={handleSubmit}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      {movies === undefined ? <p>No match, try again</p> : <p>Have fun!</p>}
    </div>
  );
}

export default SearchBar;
