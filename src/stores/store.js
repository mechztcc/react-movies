import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducer";

export default configureStore({
  reducer: {
    home: homeReducer,
  },
});


