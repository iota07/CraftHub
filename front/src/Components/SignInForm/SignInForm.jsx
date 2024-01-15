import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import TitleH1 from "../Logo/TitleH1";

const SignInForm = () => {
  return (
    <div>
      <div className="">
        <form className="" action="">
          <TitleH1 title="CraftHub" />
          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="********" required />
          </div>
          <button type="submit">Register</button>
          <div className="login-link">
            <p>
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
