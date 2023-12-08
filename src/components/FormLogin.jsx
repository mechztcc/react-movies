export default function FormLogin() {
  return (
    <div className="flex flex-col h-screen justify-center mx-10">
      <h1 className="text-6xl text-center ">Login Account</h1>
      <span className="mb-3 text-center">Fill form to access your account</span>

      <label className="mt-3 font-semibold" htmlFor="Email">
        E-mail
      </label>
      <input
        type="text"
        className="rounded-full border p-3 px-5 mt-2 border-zinc-400 focus:outline-red-400 focus:bg-red-100"
      />

      <label className="mt-3 font-semibold" htmlFor="Email">
        Password
      </label>
      <input
        type="text"
        className="rounded-full border p-3 px-5 mt-2 border-zinc-400 focus:outline-red-400 focus:bg-red-100"
      />

      <button className="mt-5 bg-red-400 p-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-500">
        SUBMIT
      </button>

      <span className="text-center mt-10">
        Don't have account? <b className="text-red-400 cursor-pointer hover:text-red-500">Create Account</b>
      </span>
    </div>
  );
}
