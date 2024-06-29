import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [register, setRegister] = useState(true);
  const [btn, setBtn] = useState(false);

  const handleInputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegister(false);
    setBtn(true);
    try {
      const response = await fetch("http://localhost:3000/registration", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Registration successful!");
      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      {register ? (
        <div className="h-[570px] pb-4 w-[30vw] bg-[#176A79] mx-[580px] my-14 rounded-[20px]">
          <h1 className="mb-4 text-2xl text-center font-bold pt-3 text-white">
            Register
          </h1>
          <form className="mx-14 pt-2" onSubmit={handleSubmit}>
            <label className="block text-md font-semibold mb-2 text-white">
              Enter your name
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              onChange={handleInputs}
            />
            <label className="block text-md font-semibold mb-2 pt-2 text-white">
              Enter your email
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              name="email"
              type="email"
              required
              placeholder="example@gmail.com"
              onChange={handleInputs}
            />
            <label className="block text-md font-semibold mb-2 pt-2 text-white">
              Enter your address
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              name="address"
              type="text"
              required
              placeholder="Enter your full address"
              onChange={handleInputs}
            />
            <label className="block text-md font-semibold mb-2 pt-2 text-white">
              Enter a password
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              name="password"
              type="password"
              required
              placeholder="Enter a password"
              onChange={handleInputs}
            />
            <label className="block text-md font-semibold mb-2 pt-2 text-white">
              Re-enter your password
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="password"
              required
              placeholder="Enter your password again"
              onChange={handleInputs}
            />
            <button
              type="submit"
              className="bg-blue-500 mt-4 mx-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <h3 className="text-white mx-[105px] my-3 w-[300px]">
              Already a member?{" "}
              <Link
                className="hover:text-sky-400 hover:border-b-2 hover:border-sky-400"
                to="/login"
              >
                Login
              </Link>
            </h3>
          </form>
        </div>
      ) : (
        <div className=" h-[570px] flex flex-col items-center justify-center">
          <p className="text-white transition-transform font-bold w-fit h-fit px-5 py-2 rounded-lg bg-green-700">
            👊 {message}
          </p>
          {btn && (
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to="/login">Go to login</Link>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Registration;
