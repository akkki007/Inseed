import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(true);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleForm = (e) => {
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

  let handlepass = (e) => {
    setForm({
      ...form,
      [e.target.name]: hashPass(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data being sent:", form); // Add this line to check the form data

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        setFlag(false);
        setLogin(true);
      } else {
        setMessage(data.message || "Login failed. Please try again.");
        setFlag(false);
        setLogin(false);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setLogin(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-white">
      {flag ? (
        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-[#176A79]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                onChange={handleForm}
                type="email"
                required
                placeholder="Enter your registered email"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                onChange={handlepass}
                type="password"
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            Not a member?{" "}
            <Link
              className="hover:text-sky-400 hover:border-b-2 hover:border-sky-400"
              to={"/registration"}
            >
              Register
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-black font-bold text-4xl">{message}</p>
          {login ? (
            <Link
              to="/dashboard"
              className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            >
              Go to dashboard
            </Link>
          ) : (
            <button
              onClick={() => setFlag(true)}
              className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            >
              Go to login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
