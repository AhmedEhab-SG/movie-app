import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favorite";

export default configureStore({
  reducer: {
    favoirte: favoriteSlice,
  },
});
