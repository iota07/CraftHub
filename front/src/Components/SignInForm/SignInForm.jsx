import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const SignInForm = () => {
    return (
        <div>
            <div className=''>
                <form className='' action="">
                    <h1>Register</h1>
                    <div className="input-box">
                        <FaUser className='icon' />
                        <input type="text" placeholder='Username' required />
                    </div>
                    <div className="input-box">
                        <FaEnvelope className='icon' />
                        <input type="email" placeholder='Email' required />
                    </div>
                    <div className="input-box">
                        <FaLock className='icon' />
                        <input type="password" placeholder='********' required />
                    </div>
                    <button type="submit">Register</button>
                    <div className="login-link">
                        <p>Have an account? <a href={LoginForm}>Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;