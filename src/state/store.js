import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./reducers/moviesReducer";
import singleMovieReducer from "./reducers/singleMovieReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: singleMovieReducer,
  },
});

export default store;
