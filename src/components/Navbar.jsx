// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              onMouseOver={toggleDropdown}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Courses
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <li>
                  <Link
                    to="/courses/Computer%20Engineering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Computer Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/Mechanical%20Engineering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Mechanical Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/Electrical%20Engineering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Electrical Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/Electrical%20Engineering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Civil Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/Electrical%20Engineering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    E&TC Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/Electrical%20Engineering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Information Technology
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/Electrical%20Engineering"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    AI and Ml
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/About" className="text-white hover:text-gray-300">
              About Us
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
