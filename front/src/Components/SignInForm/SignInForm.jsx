import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import TitleH1 from "../Logo/TitleH1";

const SignInForm = () => {
  return (
    <div>
      <div className="bg-yellow flex justify-center items-center h-screen w-full">
        <form
          className="lg:border-2  lg:border-blue lg:border-opacity-70 md:border-2 md:border-blue md:border-opacity-70 text-blue p-8 flex flex-col items-center md:text-l lg:text-xl"
          action=""
        >
          <TitleH1 title="CraftHub" />
          <div className="input-box mt-10 mb-5 flex justify-center">
            <FaUser className="icon mr-3 pt-1" />
            <input
              className="bg-blue placeholder-yellow placeholder-opacity-80 rounded pl-2"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-box mb-5 flex justify-center">
            <FaEnvelope className="icon mr-3 pt-1" />
            <input
              className="bg-blue placeholder-yellow placeholder-opacity-80 rounded pl-2"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-box mb-4 flex justify-center">
            <FaLock className="icon mr-3 pt-1" />
            <input
              className="bg-blue placeholder-yellow placeholder-opacity-80 rounded pl-2"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <button
            className="my-5 py-1 w-full text-yellow bg-orange rounded-lg"
            type="submit"
          >
            Sign in
          </button>
          <div className="login-link">
            <p>
              Have an account?{" "}
              <Link className="underline" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
