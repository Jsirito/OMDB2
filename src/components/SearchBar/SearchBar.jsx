import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMoviesRequest } from "../../state/actions/movies";
import "./SearchBar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.movies.Response);
  const userName = useSelector((state) => state.user.userName);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getMoviesRequest(input));
  };

  return (
    <div>
      {response === undefined ? (
        <div className="searchBarContainerUndefined">
          {userName ? <p>{`Hello ${userName}`}</p> : ""}
          <h1>Let's find a Movie!</h1>
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
        </div>
      ) : (
        <div className="searchBarContainer">
          {userName ? <p>{`Hello ${userName}`}</p> : ""}
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
          {response === "False" ? <h5>No match, try again...</h5> : <br/>}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
