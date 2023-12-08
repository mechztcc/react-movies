import FormLogin from "../components/FormLogin";

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      <div className="col-span-1 md:col-span-1">
        <FormLogin />
      </div>
      <div className="col-span-1 md:col-span-2 bg-red-500 ">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720802.jpg?t=st=1702052487~exp=1702056087~hmac=13eb80cb37896a56698eb0cb973287f36d6996f1fbef79029a0868c57e259739&w=1380"
          alt=""
        />
      </div>
    </div>
  );
}
