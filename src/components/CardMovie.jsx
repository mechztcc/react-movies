import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../stores/favoritsReducer";

export default function CardMovie({ props }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.whishlist.favorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isFav = favorites.filter((movie) => {
      return movie.id == props.id;
    });
    setIsFavorite(isFav.length ? true : false);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mx-3">
      <div className="col-span-1 items-center flex justify-center">
        <img src={props.image} alt="" className="rounded-3xl w-1/2" />
      </div>
      <div className="col-span-1 flex flex-col justify-between">
        <div className="mt-10">
          <h1 className="font-semibold">{props.name}</h1>
          <span className="text-zinc-500 mt-3">{props.description}</span>

          <div className="flex mt-3">
            <p className="bg-blue-600 rounded-full text-center text-white font-semibold px-3">
              {props.category}
            </p>
            <p className="bg-blue-600 rounded-full text-center text-white font-semibold mx-1 px-3">
              {props.duration}
            </p>
          </div>
        </div>

        {!isFavorite && (
          <button
            className="mt-5 bg-red-400 p-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-500"
            onClick={() => dispatch(addFavorite(props))}
          >
            <FontAwesomeIcon icon={faHeart} className="mx-2" />
            <span>FAVORITES</span>
          </button>
        )}

        {isFavorite && (
          <button
            className="mt-5 bg-blue-400 p-3 rounded-full text-white font-semibold shadow-lg hover:bg-blue-500"
            onClick={() => dispatch(removeFavorite(props))}
          >
            <FontAwesomeIcon icon={faTrash} className="mx-2" />
            <span>REMOVE</span>
          </button>
        )}
      </div>
    </div>
  );
}
