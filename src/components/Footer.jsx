import React from 'react'
import { Link } from "react-router-dom";
import Logo from "/INSEED_logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto pt-8">
        <div className="flex flex-wrap justify-between px-16">
            <div className=''>
            <img className='w-24 h-24 object-contain' src={Logo} alt='Logo'></img>
            </div>
            <div className='px-7'>
            <h2 className="text-center font-bold text-xl">
                INSEED Technological University,
            </h2>
            <p>Wellesely Rd, Shivajinagar, Pune - 411 005.</p>
            <p>Maharashtra, INDIA.</p>
            <br />
            <ul className="flex mb-4">
              <li className="mr-4">
                <a href="https://facebook.com" className="hover:underline">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.326C.595 0 0 .586 0 1.312v21.375C0 23.414.595 24 1.326 24H12.81V14.708H9.692V11.31h3.117V8.558c0-3.1 1.893-4.788 4.658-4.788 1.324 0 2.462.098 2.795.142v3.24h-1.918c-1.504 0-1.794.714-1.794 1.763v2.31h3.586l-.468 3.398h-3.118V24h6.116C23.405 24 24 23.414 24 22.687V1.312C24 .586 23.405 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li className="mr-4">
                <a href="https://twitter.com" className="hover:underline">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.004.959-3.127 1.177-.896-.959-2.173-1.557-3.586-1.557-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.13 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.829-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.104-6.102 2.104-.396 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.051 0 13.998-7.496 13.998-13.987 0-.21 0-.423-.015-.634.961-.689 1.8-1.56 2.457-2.548l-.047-.02z" />
                  </svg>
                </a>
              </li>
              <li className="mr-4">
                <a href="https://instagram.com" className="hover:underline">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.313.975.975 1.25 2.241 1.313 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.313 3.608-.975.975-2.241 1.25-3.608 1.313-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.313-.975-.975-1.25-2.241-1.313-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.337-2.633 1.313-3.608.975-.975 2.241-1.25 3.608-1.313 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.015 7.053.072 5.74.13 4.511.428 3.513 1.426 2.515 2.423 2.217 3.652 2.159 4.965.072 5.74.015 6.149.015 9.408s.057 3.667.072 4.945c.058 1.313.356 2.542 1.354 3.54.998.998 2.227 1.296 3.54 1.354 1.278.057 1.688.072 4.947.072s3.669-.015 4.947-.072c1.313-.058 2.542-.356 3.54-1.354.998-.998 1.296-2.227 1.354-3.54.057-1.278.072-1.688.072-4.947s-.015-3.669-.072-4.947c-.058-1.313-.356-2.542-1.354-3.54-.998-.998-2.227-1.296-3.54-1.354C15.668.015 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.76-6.162-6.162-6.162zm0 10.164c-2.208 0-4.002-1.794-4.002-4.002s1.794-4.002 4.002-4.002 4.002 1.794 4.002 4.002-1.794 4.002-4.002 4.002zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:underline">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.225 0H1.771C.792 0 .017.774.017 1.729v20.541c0 .954.775 1.729 1.754 1.729h20.451c.979 0 1.754-.775 1.754-1.729V1.729C23.979.774 23.204 0 22.225 0zM7.108 20.452H3.577V8.712h3.531v11.74zm-1.77-13.354a2.055 2.055 0 110-4.11 2.055 2.055 0 010 4.11zm15.877 13.354h-3.531v-5.87c0-1.397-.027-3.194-1.945-3.194-1.946 0-2.244 1.52-2.244 3.092v5.972H9.984V8.712h3.391v1.598h.047c.473-.898 1.629-1.843 3.354-1.843 3.584 0 4.242 2.357 4.242 5.423v6.562h-.001z" />
                  </svg>
                </a>
              </li>
            </ul>
            </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 px-10">
            <h5 className="uppercase mb-6 font-bold">Navigate</h5>
            <ul className="mb-4">
            <li className="mt-2">
                <Link to="/about" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/about" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/contact" className="hover:underline">
                  Login
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/careers" className="hover:underline">
                  Placements
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/about" className="hover:underline">
                  Registration
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/about" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="font-bold text-xl">
               INSEED History
            </h2><br></br>
            <p>
                The Inseed, Pune is one of the prominent institutes among
                polytechnics in Maharashtra. The institute was established in
                the year 1957, under the academic control of Maharashtra State
                Board of Technical Education, Maharashtra State. The institute
                was awarded academic autonomy in May 1994.....
            </p>
            <br></br>
            <button
              className=" border-2 border-white bg-gray-800 hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Read More About History
            </button>
          </div>
          
        </div>
        <div className="border-t border-white text-center bg-gray-400">
          <p className="text-base font-semibold text-gray-800 py-4">
          Copyright  &copy; {new Date().getFullYear()} 2023 | INSEED Technological University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer

    
                                        