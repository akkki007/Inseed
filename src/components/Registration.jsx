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

  let hashPass = (pass) => {
    return (
      "hidng22" +
      pass.slice(0, pass.length / 2) +
      "nsgimag" +
      pass.slice(pass.length / 2, pass.length) +
      "bb23"
    );
  };

  const handlePassword = (e) => {
    setForm({
      ...form,
      [e.target.name]: hashPass(e.target.value),
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-white">
      {register ? (
        <div className="w-full max-w-lg p-6 rounded-lg shadow-md bg-[#176A79]">
          <h1 className="mb-4 text-2xl text-center font-bold text-white">
            Register
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-white">
                Enter your name
              </label>
              <input
                className="mt-1   text-black block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                onChange={handleInputs}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white">
                Enter your email
              </label>
              <input
                className="mt-1 text-black block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                name="email"
                type="email"
                required
                placeholder="example@gmail.com"
                onChange={handleInputs}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white">
                Enter your address
              </label>
              <input
                className="mt-1 block  text-black w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                name="address"
                type="text"
                required
                placeholder="Enter your full address"
                onChange={handleInputs}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white">
                Enter a password
              </label>
              <input
                className="mt-1 block  text-black w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                name="password"
                type="password"
                required
                placeholder="Enter a password"
                onChange={handlePassword}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white">
                Re-enter your password
              </label>
              <input
                className="mt-1 block  text-black w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="password"
                required
                placeholder="Enter your password again"
                onChange={handleInputs}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            Already a member?{" "}
            <Link
              className="hover:text-sky-400 hover:border-b-2 hover:border-sky-400"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-white transition-transform font-bold px-5 py-2 rounded-lg bg-green-700">
            👊 {message}
          </p>
          {btn && (
            <Link
              to="/login"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Go to login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Registration;
