import React from 'react';
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const LoginForm = () => {
    return (
        <div className=''>
            <form action="" className='bg-yellow text-blue p-8 '>
                <h1 className='font-bold text-center py-4'>Log in</h1>
                <div className="input-box flex justify-center item-center my-5">
                    <FaEnvelope className='icon mr-3' />
                    <input className='bg-blue' type="email" placeholder='Email' required />
                </div>
                <div className="input-box flex justify-center item-center mb-5">
                    <FaLock className='icon mr-3' />
                    <input className='bg-blue' type="password" placeholder='********' required />
                </div>
                <div className="remember-forgot flex justify-center flex-col mb-5 ">
                    <label><input className='mr-3' type="checkbox" />Remember me</label>
                </div>
                <div>
                    <a href="#">Forgot password?</a>
                </div>
                <button className='w-full py-4' type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/signin">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;