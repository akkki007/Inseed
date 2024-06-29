import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import Navbar from './Navbar';
const Login = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [flag,setFlag] = useState(false);
  const navigate = useNavigate();
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
        await response.json();
        if (response.ok) {
            setMessage("Login successful!");
        } else {
            setMessage('Login failed. Please try again.');
        }
    } catch (error) {
        setMessage('An error occurred. Please try again.');
    }
  };
  return (
    <>
    <Navbar/>
    <div className="h-[90vh]   flex items-center justify-center bg-[gray]-100  text-white">
      <div className="w-[70vh] rounded-sm max-w-s ">
        <form onSubmit={handleSubmit} className=" shadow-md  bg-[#176A79] rounded-[20px] px-8 pt-9 pb-10 mb-10">
          <h2 className="mb-4 text-xl text-center font-bold">Login</h2>
            <label className="block  text-sm font-bold mb-2 text-white">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              onChange={handleForm}
              type="email"
              placeholder="Enter your registered email"
            />
            <label className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              onChange={handleForm}
              type="text"
              placeholder="Enter your password"
            />  
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            </form>
          <h3 className="text-white text-[15px] mx-[130px] w-[300px]">Not a member ? <Link className="hover:text-sky-400 hover:border-b-2 hover:border-sky-400" to={"/registration"}>Register</Link></h3>
        
       {message && <p className='text-black'>{message}</p> } 
      </div>  
    </div>
    </>
  );
};

export default Login;
