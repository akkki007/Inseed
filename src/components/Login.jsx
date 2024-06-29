import React from 'react';
import {Link} from "react-router-dom";
import { useState } from 'react';
const Login = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (response.ok) {
            setMessage('Login successful!');
        } else {
            setMessage(data.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        setMessage('An error occurred. Please try again.');
    }
    
  };
  return (
    <div className="h-[90vh]   flex items-center justify-center bg-[gray]-100  text-white">
      <div className="w-[70vh] rounded-sm max-w-s ">
        <form onSubmit={handleForm} className=" shadow-md  bg-[#176A79] rounded-[20px] px-8 pt-9 pb-10 mb-10">
          <h2 className="mb-4 text-xl text-center font-bold">Login</h2>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2 text-white">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name='email'
              onChange={handleSubmit}
              type="text"
              placeholder="Enter your registered email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              onChange={handleSubmit}
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
          <h3 className="text-white text-[15px] mx-[130px] w-[300px]">Not a member ? <Link className="hover:text-sky-400 hover:border-b-2 hover:border-sky-400" to={"/registration"}>Register</Link></h3>
        { message && <p className="text-red-500 text-xs italic">{message}</p> }
        </form>
      </div>
    </div>
  );
};

export default Login;
