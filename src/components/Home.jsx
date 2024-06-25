import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-300 h-64 md:h-full flex items-center justify-center">
              {/* Placeholder for College Photo */}
              <span className="text-gray-500">College Photo</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our College</h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            </p>
            <p className="text-gray-600">
              Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 College Name. All rights reserved.</p>
          <p className="text-sm">
            <a href="/about" className="hover:underline">About</a> | 
            <a href="/contact" className="hover:underline"> Contact</a> | 
            <a href="/privacy" className="hover:underline"> Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
