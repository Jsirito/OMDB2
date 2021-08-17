import { createReducer } from "@reduxjs/toolkit";
import { getSingleMovieRequest } from "../actions/singleMovie";

const singleMovieReducer = createReducer([], {
  [getSingleMovieRequest.fulfilled]: (state, action) => action.payload,
});

export default singleMovieReducer;
