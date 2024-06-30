// src/components/Navbar.js
import { Link } from "react-router-dom";

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
          <li className="relative">
            <div className="drop inline-block relative group">
              <Link to="/about" className="text-white hover:text-gray-300">
                About Us
              </Link>
              <div className="content bg-gray-700 text-white absolute shadow-md shadow-black hidden group-hover:block">
                <a
                  href="/about#administration"
                  className="scroll-smooth block pl-2 pr-2 pt-2 hover:text-gray-300"
                >
                  Administration
                </a>
                <a
                  href="/about#history "
                  className="scroll-smooth block pl-2 pr-2 pt-1 pb-1 hover:text-gray-300"
                >
                  History
                </a>
                <a
                  href="https://www.drishtiias.com/pdf/1670230884.pdf"
                  className="block pl-2 pr-2 pt-1 pb-1 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Citizen Charter
                </a>
                <a
                  href="/about#mission-and-vision"
                  className="scroll-smoothblock pl-2 pr-2 pt-1 pb-1 hover:text-gray-300"
                >
                  Mission and Vision
                </a>
              </div>
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
