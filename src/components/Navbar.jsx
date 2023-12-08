import {
  faMagnifyingGlass,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex w-full bg-zinc-200 h-20 justify-between items-center p-3 shadow-lg">
      <Link to="/">
        <h1 className="font-bold text-3xl title text-red-400 cursor-pointer hover:text-red-500">
          MOVIES
        </h1>
      </Link>

      <div className="flex">
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-2 bottom-2 text-red-400 bg-red-200 p-2 rounded-full hover:text-white hover:bg-red-400 cursor-pointer"
          />
          <input type="text" className="p-3 rounded-full outline-zinc-300" />
        </div>

        <Link to="/login">
          <button className="text-red-400  bg-white rounded-full mx-2">
            <FontAwesomeIcon
              icon={faDoorOpen}
              className="text-red-400 p-3 hover:text-red-500"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
