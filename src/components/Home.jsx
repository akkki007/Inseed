import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import harvard1 from './harvard1.jpg';
import harvard2 from './harvard2.jpg';
import harvard3 from './harvard3.jpg';
import admissionsImage from './admissions.webp';
import undergradsImage from './Undergrads.webp';
import computerImage from './computer.jpg';
import itImage from './it.jpg';
import mechanicalImage from './mechanical.jpg';
import metallurgyImage from './metallurgy.jpg';
import civilImage from './civil.jpg';
import entcImage from './entc.jpg';
import electricalImage from './electrical.jpg';
import aimlImage from './aiml.jpg';

const images = [harvard1, harvard2, harvard3];

const courses = [
  {
    name: 'Computer Engineering',
    description: 'Learn about algorithms, data structures, and computer systems.',
    image: computerImage,
    path: '/courses/computer-engineering',
  },
  {
    name: 'IT Engineering',
    description: 'Focus on information systems, database management, and networking.',
    image: itImage,
    path: '/courses/it-engineering',
  },
  {
    name: 'Mechanical Engineering',
    description: 'Study mechanics, thermodynamics, and material science.',
    image: mechanicalImage,
    path: '/courses/mechanical-engineering',
  },
  {
    name: 'Metallurgy Engineering',
    description: 'Explore materials science and metallurgical processes.',
    image: metallurgyImage,
    path: '/courses/metallurgy-engineering',
  },
  {
    name: 'Civil Engineering',
    description: 'Learn about structural engineering, construction, and infrastructure.',
    image: civilImage,
    path: '/courses/civil-engineering',
  },
  {
    name: 'ENTC Engineering',
    description: 'Focus on electronics, communication systems, and signal processing.',
    image: entcImage,
    path: '/courses/entc-engineering',
  },
  {
    name: 'Electrical Engineering',
    description: 'Study electrical circuits, power systems, and control systems.',
    image: electricalImage,
    path: '/courses/electrical-engineering',
  },
  {
    name: 'AI and ML Engineering',
    description: 'Explore artificial intelligence, machine learning, and data science.',
    image: aimlImage,
    path: '/courses/ai-ml-engineering',
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <main className="flex-grow container mx-auto py-8 px-4">
        <section className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-8 flex">
          <div className="w-1/2 h-auto rounded-lg mr-4" style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Inseed University</h1>
            <p className="text-gray-600 mb-4">
              At Inseed University, we are committed to nurturing the intellectual and personal growth of our students. Our academic programs are designed to inspire creativity, critical thinking, and a passion for learning. 
            </p>
            <p className="text-gray-600 mb-4">
              Our campus is a vibrant community where students from diverse backgrounds come together to collaborate and innovate. With state-of-the-art facilities and a supportive environment, Inseed University provides an ideal setting for academic excellence and personal development.
            </p>
            <p className="text-gray-600">
              Join us at Inseed University, where you can explore new ideas, develop your skills, and prepare for a successful future. Our dedicated faculty and staff are here to guide and support you every step of the way.
            </p>
          </div>
        </section>

        <section className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-8 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission</h2>
          <img src={admissionsImage} alt="Admissions" className="w-full h-auto mb-4" />
          <p className="text-gray-600">Explore the possibilities of an Inseed University education.</p>
          <div className="flex justify-between w-full mt-4">
            <div className="text-left w-1/3">
              <h3 className="text-2xl font-bold">7,841</h3>
              <p className="text-gray-600">Undergraduate students</p>
            </div>
            <div className="text-center w-1/3">
              <h3 className="text-2xl font-bold">Class of 2027</h3>
              <p className="text-gray-600">from 76 countries + 49 states</p>
            </div>
            <div className="text-right w-1/3">
              <h3 className="text-2xl font-bold">9,688</h3>
              <p className="text-gray-600">Graduate students</p>
            </div>
          </div>
        </section>

        <section className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Undergraduates</h2>
            <p className="text-gray-600 mb-4">
              Undergraduate Admission
              About 1,700 freshmen and 30 transfer students enroll at Stanford each year. We review each applicant with an eye to academic excellence, intellectual vitality, and personal context.
            </p>
            <p className="text-gray-600">
              Undergraduate Financial Aid
              Stanford meets the full financial need of every admitted undergrad who qualifies for assistance. Tuition is covered for undergrads with family incomes under $150,000. Tuition, room, and board are covered for undergrads with family incomes below $100,000.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={undergradsImage} alt="Undergraduates" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Financial Aid</h2>
          <p className="text-gray-600 mb-4">We are committed to making a world-class education affordable.</p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-bold">About 65%</h3>
              <p className="text-gray-600">of students receive financial aid toward the cost of attendance</p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <h3 className="text-2xl font-bold">Tuition covered</h3>
              <p className="text-gray-600">for undergrads with family incomes below $150,000</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-bold">Tuition, room, & board covered</h3>
              <p className="text-gray-600">for undergrads with family incomes below $100,000</p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <h3 className="text-2xl font-bold">Graduate aid available</h3>
              <p className="text-gray-600">based on available funds and academic merit</p>
            </div>
          </div>
        </section>

        <section className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Courses</h2>
          <div className="flex flex-wrap justify-center">
            {courses.map((course, index) => (
              <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white">
                <img className="w-full" src={course.image} alt={course.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{course.name}</div>
                  <p className="text-gray-700 text-base">{course.description}</p>
                </div>
                <div className="px-6 py-4">
                  <Link to={course.path} className="text-blue-500 hover:text-blue-800">
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Inseed University. All rights reserved.</p>
          <p className="text-sm">
            <Link to="/about" className="hover:underline">About</Link> | 
            <Link to="/contact" className="hover:underline">Contact</Link> | 
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
