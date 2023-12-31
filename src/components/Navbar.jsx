import {
  faMagnifyingGlass,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { filterByName } from "../stores/homeReducer";

export default function Navbar() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  function isLoginPage() {
    return pathname.includes("login");
  }

  if (isLoginPage()) {
    return <div></div>;
  } else {
    return (
      <div className="flex w-full bg-zinc-200 h-20 justify-between items-center p-3 shadow-lg">
        <Link to="/">
          <h1 className="font-bold text-3xl title text-red-400 cursor-pointer hover:text-red-500">
            MO
          </h1>
        </Link>

        <div className="flex ">
          <div className="relative">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-2 bottom-2 text-red-400 bg-red-200 p-2 rounded-full hover:text-white hover:bg-red-400 cursor-pointer"
            />
            <input
              type="text"
              className="p-3 rounded-full outline-zinc-300"
              onChange={(el) => dispatch(filterByName(el.target.value))}
            />
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
}
