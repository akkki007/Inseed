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

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        setFlag(false);
        setLogin(true);
      } else {
        setMessage("Login failed. Please try again.");
        setFlag(false);
        setLogin(false);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setLogin(false);
    }
  };
  return (
    <div>
      {flag ? (
        <div className="h-[90vh]   flex items-center justify-center bg-[gray]-100  text-white">
          <div className="w-[70vh] rounded-sm max-w-s ">
            <form
              onSubmit={handleSubmit}
              className=" shadow-md h-[50vh] bg-[#176A79] -my-24 rounded-[20px] px-8 pt-9 pb-10 mb-10"
            >
              <h2 className="mb-4 text-xl text-center font-bold">Login</h2>
              <label className="block text-md font-bold mb-2 text-white">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                onChange={handleForm}
                type="email"
                required
                placeholder="Enter your registered email"
              />

              <label className="block text-md font-bold mb-2 pt-3">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                onChange={handlepass}
                type="password"
                required
                placeholder="Enter your password"
              />
              <button
                className="bg-blue-500 mt-2 mx-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
            <h3 className="text-white text-[15px] mx-[190px] -my-24 w-[300px]">
              Not a member ?{" "}
              <Link
                className="hover:text-sky-400 hover:border-b-2 hover:border-sky-400"
                to={"/registration"}
              >
                Register
              </Link>
            </h3>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="text-black mx-[580px] w-[580px] font-bold text-4xl my-72 ">
            👊{message}
          </p>
          {login ? (
            <button className="w-[10vw] text-white hover:bg-green-900 px-8 py-3 mx-[760px] mt-[-250px] bg-green-600 rounded-md">
              <Link to="/dashboard"> Go to dashboard</Link>
            </button>
          ) : (
            <button
              onClick={() => {
                setFlag(true);
              }}
              className="w-[10vw] text-white hover:bg-green-900 px-8 py-3 mx-[760px] mt-[-250px] bg-green-600 rounded-md"
            >
              <Link to="/login"> Go to login</Link>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
