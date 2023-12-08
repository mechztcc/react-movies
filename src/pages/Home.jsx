import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../components/CardMovie";
import { addMultiple } from "../stores/favoritsReducer";

export default function Home() {
  const movies = useSelector((state) => state.home.movies);
  const filtered = useSelector((state) => state.home.filtered);
  const [moviesCards, setMoviesCards] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      dispatch(addMultiple(favs));
    }

    const temp = [];
    for (let index = 0; index < filtered.length; index++) {
      const movie = filtered[index];
      temp.push(<CardMovie props={movie} key={movie.id} />);
      setMoviesCards(temp);
    }
  }, [filtered]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 my-10">
      {moviesCards}
    </div>
  );
}
