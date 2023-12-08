import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="flex w-full bg-zinc-200 h-20 justify-between items-center p-3 shadow-lg">
      <h1 className="font-bold text-3xl title text-red-400 cursor-pointer hover:text-red-500">MOVIES</h1>

      <div className="relative">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-2 bottom-2 text-red-400 bg-red-200 p-2 rounded-full hover:text-white hover:bg-red-400 cursor-pointer"/>
        <input type="text" className="p-3 rounded-full outline-zinc-300" />
      </div>
    </div>
  );
}
