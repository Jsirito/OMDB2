import { createReducer } from "@reduxjs/toolkit";
import {getMoviesRequest} from "../actions/movies"

const moviesReducer = createReducer([], {
  [getMoviesRequest.fulfilled]: (state, action) => action.payload,
});

export default moviesReducer;
