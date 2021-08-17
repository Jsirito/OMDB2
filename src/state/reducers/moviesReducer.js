import { createReducer } from "@reduxjs/toolkit";
import {getMoviesRequest} from "../actions/movies"

//Recibe como prier parametro un estado inicial y como segundo un obj con las condiciones de la funcion
const moviesReducer = createReducer([], {
  //A los reducers se le pasa primero es el estado actual y la accion que dice que es lo que paso
  [getMoviesRequest.fulfilled]: (state, action) => action.payload,
});

export default moviesReducer;
