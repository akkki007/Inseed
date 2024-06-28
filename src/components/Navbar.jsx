// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/placements" className="text-white hover:text-gray-300">
              Placements
            </Link>
          </li>
          <li>
            <Link to="/registration" className="text-white hover:text-gray-300">
              Registration
            </Link>
          </li>
          <li>
            <div className="drop">
            <Link to="/About" className="text-white hover:text-gray-300">
              About Us
              <div className="content  bg-gray-700 text-white absolute shadow-md shadow-black hover:block">
              <a className='block pl-2 pr-2 pt-2  hover:text-gray-300' href="">Administration</a>
              <a className='block pl-2 pr-2 pt-1 pb-1 hover:text-gray-300'href="">History</a>
              <a className='block pl-2 pr-2 pt-1 pb-1 hover:text-gray-300'href="">Citizen Charter</a>
              <a className='block pl-2 pr-2 pb-1 pt-1 hover:text-gray-300'href="">Message from Principal</a>
              <a className='block pl-2 pr-2 pb-1 pt-1 hover:text-gray-300'href="">Mission and Vission</a>
              <a className='block pl-2 pr-2 pb-1 pt-1 hover:text-gray-300'href="">Right To imformation Act</a>



              </div>
            
            </Link>
            </div>
          </li>
          
        </ul>
        <div className="relative">
          <input
            type="text"
            className="px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <button className="absolute right-2 top-2 text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17.25 10.5a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
