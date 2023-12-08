import { useSelector } from "react-redux";
import CardMovie from "../components/CardMovie";
import { useEffect, useState } from "react";

export default function Home() {
  const movies = useSelector((state) => state.home.movies);
  const [moviesCards, setMoviesCards] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let index = 0; index < movies.length; index++) {
      const movie = movies[index];
      temp.push(<CardMovie props={movie} key={movie.id} />);
      setMoviesCards(temp);
    }
  }, [movies]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 my-10">
      {moviesCards}
    </div>
  );
}
