import { createSlice } from "@reduxjs/toolkit";
import { logRoles } from "@testing-library/react";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        return;
      }
      state.favorites.push(action.payload);
    },

    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((movie) => {
        return movie.id != payload.id;
      });
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
