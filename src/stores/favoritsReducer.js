import { createSlice } from "@reduxjs/toolkit";

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
      const favs = JSON.stringify(state.favorites);
      localStorage.setItem("favs", favs);
    },

    addMultiple: (state, action) => {
      state.favorites = action.payload;
      console.log(state.favorites);
    },

    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((movie) => {
        return movie.id != payload.id;
      });
      const favs = JSON.stringify(state.favorites);
      localStorage.setItem("favs", favs);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite, addMultiple } =
  favoritesSlice.actions;
