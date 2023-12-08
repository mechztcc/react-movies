import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import favoritsReducer from "./favoritsReducer";

export default configureStore({
  reducer: {
    home: homeReducer,
    whishlist: favoritsReducer,
  },
});
