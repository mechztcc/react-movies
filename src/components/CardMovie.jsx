import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { add } from "../stores/reducer";

export default function CardMovie({ props }) {
  const dispatch = useDispatch();

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

        <button
          className="mt-5 bg-red-400 p-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-500"
          onClick={() => dispatch(add(props))}
        >
          <FontAwesomeIcon icon={faHeart} className="mx-2" />
          <span>FAVORITOS</span>
        </button>
      </div>
    </div>
  );
}
