import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function CardMovie() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mx-3">
      <div className="col-span-1 items-center flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg"
          alt=""
          className="rounded-3xl"
        />
      </div>
      <div className="col-span-1 flex flex-col justify-between">
        <div className="mt-10">
          <h1 className="font-semibold">OPPENHEIMER</h1>
          <span className="text-zinc-500 mt-3">
            A história do cientista americano J. Robert Oppenheimer e o seu
            papel no desenvolvimento da bomba atômica.
          </span>

          <div className="flex mt-3">
            <p className="bg-blue-600 rounded-full text-center text-white font-semibold px-3">
              Drama
            </p>
            <p className="bg-blue-600 rounded-full text-center text-white font-semibold mx-1 px-3">
              2h 22min
            </p>
          </div>
        </div>

        <button className="mt-3 bg-red-400 p-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-500">
          <FontAwesomeIcon icon={faPlay} className="mx-2" />
          <span>ASSISTIR</span>
        </button>
      </div>
    </div>
  );
}
