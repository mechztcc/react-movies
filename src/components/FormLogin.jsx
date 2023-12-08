import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { faE, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormLogin() {
  const navigate = useNavigate();

  const [isPass, setIsPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col h-screen justify-center mx-10">
        <h1 className="text-6xl text-center ">Login Account</h1>
        <span className="mb-3 text-center">
          Fill form to access your account
        </span>

        <label className="mt-3 font-semibold" htmlFor="Email">
          E-mail
        </label>
        <input
          {...register("email", { required: "E-mail is required." })}
          type="text"
          className="rounded-full border p-3 px-5 mt-2 border-zinc-400 focus:outline-red-400 focus:bg-red-100"
        />

        <small className="text-red-400 mt-2">{errors.email?.message}</small>

        <label className="mt-3 font-semibold" htmlFor="Email">
          Password
        </label>

        <div className="relative flex justify-end items-center">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: 6,
            })}
            type={isPass ? "text" : "password"}
            className="rounded-full border p-3 px-5 mt-2 border-zinc-400 focus:outline-red-400 focus:bg-red-100 w-full"
          />
          <button
             onClick={() => {
             setIsPass(!isPass)
            }}
            type="button"
            className="rounded-full absolute top-5 right-3 px-2 py-1 bg-red-200 flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={isPass ? faEye : faEyeSlash}
              className="text-red-400 hover:text-red-500"
            />
          </button>
        </div>
        <small className="text-red-400 mt-2">{errors.password?.message}</small>
        <button
          type="submit"
          className="mt-5 bg-red-400 p-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-500 hover:shadow-red-300"
        >
          SUBMIT
        </button>

        <span className="text-center mt-10">
          Don't have account?{" "}
          <b className="text-red-400 cursor-pointer hover:text-red-500 hover:shadow-red-300">
            Create Account
          </b>
        </span>
      </div>
    </form>
  );
}
