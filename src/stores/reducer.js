import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    movies: [
      {
        id: 1,
        name: "The Shawshank Redemption",
        category: "Thriller/Crime",
        age: "16",
        release: "1994",
        score: "9.3",
        totalScore: "2.8mi",
        duration: "2h 22 min",
        image: "assets/um-sonho-de-liberdade.jpeg",
        embed: "https://www.youtube.com/embed/EIc_wJtm6AU?si=HaXeyRelkd9lDHxX",
        description:
          "Two imprisoned men reunite over the course of several years, finding solace and eventual redemption through acts of common decency.",
      },
      {
        id: 2,
        name: "The Godfather",
        category: "Thriller/Crime",
        age: "14",
        release: "1972",
        score: "9.2",
        totalScore: "2.3mi",
        duration: "2h 55 min",
        image: "assets/poderoso-chefao.jpeg",
        embed: "https://www.youtube.com/embed/SaHZHU-44XA?si=e7CIpa3vVmKIRcSI",
        description:
          "The aging patriarch of an organized crime dynasty passes control of his clandestine empire to his reluctant son.",
      },
      {
        id: 3,
        name: "The Dark Knight ",
        category: "Action/Crime",
        age: "12",
        release: "2008",
        score: "9.0",
        totalScore: "2.8mi",
        duration: "2h 32 min",
        image: "assets/batman.jpg",
        embed: "https://www.youtube.com/embed/EXeTwQWrcwY?si=PKH7SB-VAXCyt0Ag",
        description:
          "Now with the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman has what it takes to banish crime from Gotham City once and for all. But soon, the three will fall victim to the Joker, who intends to throw Gotham into anarchy.",
      },
      {
        id: 4,
        name: "Pulp Fiction ",
        category: "Action/Crime",
        age: "18",
        release: "1994",
        score: "8.9",
        totalScore: "2.2mi",
        duration: "2h 34 min",
        image: "assets/pulp-fiction.jpg",
        embed: "https://www.youtube.com/embed/s7EdQ4FqbhY?si=csb96tMftEonCEN-",
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of thugs intertwine in four stories of violence and redemption.",
      },
      {
        id: 5,
        name: "Fight Club ",
        category: "Action/Crime",
        age: "18",
        release: "1999",
        score: "8.8",
        totalScore: "2.3mi",
        duration: "2h 19 min",
        image: "assets/clube-luta.jpg",
        embed: "https://www.youtube.com/embed/O1nDozs-LxI?si=BGhq5hqePlMWGkT_",
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of thugs intertwine in four stories of violence and redemption.",
      },
      {
        id: 6,
        name: "Joker ",
        category: "Action/Crime",
        age: "16",
        release: "2019",
        score: "8.8",
        totalScore: "2.3mi",
        duration: "2h 2 min",
        image: "assets/coringa.webp",
        embed: "https://www.youtube.com/embed/zAGVQLHvwOY?si=hlWZRoXMsT73MEoN",
        description:
          "A failed comedian goes crazy and becomes a psychopathic killer.",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      console.log(state.movies[0].name);
    },
  },
});

export default homeSlice.reducer;
export const { add } = homeSlice.actions;
