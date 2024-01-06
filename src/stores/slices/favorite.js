import { createSlice } from "@reduxjs/toolkit";

const INTIAL_STATE = {
  count: 0,
  movieListId: [],
};

const favoriteSlice = createSlice({
  name: "favoirte",
  initialState: INTIAL_STATE,

  reducers: {
    addMovie: (state, action) => {
      state.count += 1;
      state.movieListId.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.count -= 1;
      state.movieListId.filter((id) => id !== action.payload);
    },
    resetFav: (state) => {
      state.count = INTIAL_STATE.count;
      state.movieListId = INTIAL_STATE.movieListId;
    },
  },
});

export const { addMovie, removeMovie, resetFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
