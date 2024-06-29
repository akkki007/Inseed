import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleInputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/registration", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      if (response.ok) {
        setMessage("Registration successful!");
      } else {
        setMessage("");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div>
      <div className="h-fit pb-4 w-[30vw] bg-[#176A79] mx-[550px] my-14 rounded-[20px]">
        <h1 className="mb-4 text-2xl text-center font-bold pt-3 text-white">
          Register
        </h1>
        <form className="mx-14 pt-2" onSubmit={handleSubmit}>
          <label className="block text-md font-semibold mb-2 text-white">
            Enter your name
          </label>
          <input
            className=" mt-1 block w-[350px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            name="name"
            type="text"
            placeholder="Enter your full name"
            onChange={handleInputs}
          />
          <label className="block text-md font-semibold mb-2 pt-2 text-white">
            Enter your email
          </label>
          <input
            className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            onChange={handleInputs}
          />
          <p className="w-[300px] hidden peer-invalid:block text-red-600 text-sm">
            Please provide a valid email address.
          </p>
          <label className="block text-md font-semibold mb-2 pt-2 text-white">
            Enter your address
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            name="address"
            type="text"
            placeholder="Enter your full address"
            onChange={handleInputs}
          />
          <label className="block text-md font-semibold mb-2 pt-2 text-white">
            Enter a password
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            name="password"
            type="password"
            placeholder="Enter a password"
            onChange={handleInputs}
          />
          <label className="block text-md font-semibold mb-2 pt-2 text-white">
            Re-enter your password
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            placeholder="Enter your password again"
            onChange={handleInputs}
          />
          <button
            type="submit"
            className="text-white border border-white mx-[120px] px-5 py-2 my-4 rounded-md hover:bg-white hover:text-[#176A79]"
          >
            Register
          </button>
          <h3 className="text-white mx-[90px] w-[300px]">Already a member ? <Link className="hover:text-sky-400 hover:border-b-2 hover:border-sky-400" to={"/login"}>Login</Link></h3>
        </form>
        {message && (
          <p className="text-white transition-transform font-bold w-fit h-fit px-5 py-2 -mx-[550px] rounded-e-lg -my-[560px] bg-green-700">
            👊 {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Registration;
