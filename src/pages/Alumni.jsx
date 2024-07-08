import React from "react";
import harvard1 from "/harvard1.jpg";
import graduation from "/graduation.jpg";
import logo from "./../assets/react.svg";

const shadowClasses = "rounded-lg shadow-lg";
const buttonClasses = `px-4 py-2 rounded-full shadow-lg hover:bg-orange-500 transition`;
const textClasses = "text-white text-black";

const AlumniCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${harvard1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`min-h-screen   p-4 ${textClasses}`}
    >
      <header
        className={`backdrop-blur-lg bg-opacity-65 flex items-center justify-between p-4 bg-white ${shadowClasses}`}
      >
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={logo} //image
            alt="Profile"
          />
          <div>
            <h1 className="text-lg font-bold text-black">Alumni Community</h1>
            <p className="text-sm text-green-500">
              Connecting Generations, Building Futures
            </p>
            <button className="text-blue-500">Follow</button>
          </div>
        </div>
        <button className={`bg-blue-500 text-white ${buttonClasses}`}>
          Get in touch
        </button>
      </header>

      <main className=" space-y-8 mt-8">
        <section
          className={`backdrop-blur-lg bg-opacity-65 flex flex-col md:flex-row items-center bg-white text-black p-8 space-y-4 md:space-y-0 md:space-x-4 ${shadowClasses}`}
        >
          <div className="flex-1">
            <blockquote className="text-xl italic">
              "Education is the most powerful weapon which you can use to change
              the world.Get connected with prior Generations."
            </blockquote>
          </div>
          <div className="flex-1 h-[50vh]">
            <div
              className="w-[80vh] h-[50vh] rounded-lg shadow-lg relative bg-gradient-to-r from-gray-800 via-transparent to-gray-800"
              style={{
                backgroundImage: `url(${harvard1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </section>

        <section
          className={`backdrop-blur-lg bg-opacity-65 bg-white text-black p-8 ${shadowClasses}`}
        >
          <div
            className="w-[90vw] h-[50vh] rounded-lg shadow-lg relative bg-gradient-to-r from-gray-800 via-transparent to-gray-800"
            style={{
              backgroundImage: `url(${graduation})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="mt-4">
            <button className={`bg-yellow-500 text-black ${buttonClasses}`}>
              Come and Make a Difference
            </button>
          </div>
        </section>

        <section
          className={`backdrop-blur-lg bg-opacity-65 flex flex-col md:flex-row items-center bg-white text-black p-8 space-y-4 md:space-y-0 md:space-x-4 ${shadowClasses}`}
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Alumni</h2>
            <p>
              The Inseed University alumni network is a vibrant and engaged
              community of graduates from the Inseed University of Management.
            </p>
            <button
              className={`bg-yellow-500 text-black ${buttonClasses} mt-4`}
            >
              Give to the Inseed
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Alumni Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  Link 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  Link 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  Link 3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  See All Events
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section
          className={`backdrop-blur-lg bg-white bg-opacity-65 text-black p-8 ${shadowClasses}`}
        >
          <h2 className="text-2xl my-5 font-bold">Upcomming - Alumni Events</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between  px-7 py-2 shadow-lg rounded-[15px]  hover:bg-orange-400 hover:text-white transition">
              <div>
                <h3 className="text-xl font-bold">Networking Events</h3>
                <p>
                  Connect with fellow alumni and expand your professional
                  network at our upcoming networking event!
                </p>
              </div>

              <button className={`bg-yellow-500 text-black ${buttonClasses}`}>
                Learn More
              </button>
            </div>
            <div className="flex items-center justify-between  px-7 py-2 shadow-lg rounded-[15px]  hover:bg-orange-400 hover:text-white transition">
              <div>
                <h3 className="text-xl font-bold">Career Fairs</h3>
                <p>
                  {" "}
                  Explore job opportunities and meet potential employers at our
                  alumni career fair.
                </p>
              </div>
              <button className={`bg-yellow-500 text-black ${buttonClasses}`}>
                Learn More
              </button>
            </div>
            <div className="flex items-center justify-between  px-7 py-2 shadow-lg rounded-[15px]  hover:bg-orange-400 hover:text-white transition">
              <div>
                <h3 className="text-xl font-bold">Reunions</h3>
                <p>
                  Join us for a memorable reunion where we'll celebrate old
                  friendships and create new memories!
                </p>
              </div>
              <button className={`bg-yellow-500 text-black ${buttonClasses}`}>
                Learn More
              </button>
            </div>
            <div className="flex items-center justify-between  px-7 py-2 shadow-lg rounded-[15px]  hover:bg-orange-400 hover:text-white transition">
              <div>
                <h3 className="text-xl font-bold">
                  Cultural and Social Events
                </h3>
                <p>
                  Celebrate diversity and culture with alumni at our upcoming
                  cultural and social events
                </p>
              </div>
              <button className={`bg-yellow-500 text-black ${buttonClasses}`}>
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AlumniCard;
