import React from 'react';
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div className="h-[90vh]   flex items-center justify-center bg-[gray]-100  text-white">
      <div className="w-[70vh] rounded-sm max-w-s ">
        <form className=" shadow-md  bg-[#176A79] rounded-[20px] px-8 pt-9 pb-10 mb-10">
          <h2 className="mb-4 text-xl text-center font-bold">Login</h2>
          <div className="mb-4 ">
            <label className="  block  text-sm font-bold mb-2 text-white" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="captcha">
              Captcha
            </label>
            <div className="flex items-center">
              <div className="bg-gray-200 p-2 rounded mr-2">
                <span className="text-lg text-black font-semibold">A8a9</span>
              </div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="captcha"
                type="text"
                placeholder="Enter the captcha"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
          <p className="text-center text-white-500 text-xs mt-4">
            Not a member ? 
            <Link className="text-blue-500 hover:text-blue-800" to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
