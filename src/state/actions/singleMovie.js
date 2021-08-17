import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const OMDBkey = '19a4bb21'

export const getSingleMovieRequest = createAsyncThunk("SINGLE_MOVIE", (inputSearch) => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=${OMDBkey}&i=${inputSearch}`)
    .then((r) => r.data);
});