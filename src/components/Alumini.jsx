import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StudentDashboard = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const studentData = [
    {
      id: 1,
      name: "Raj",
      batchYear: 2021,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      field: "Software Engineer",
      company: "Tech Corp",
    },
    {
      id: 2,
      name: "John",
      batchYear: 2020,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      field: "Data Scientist",
      company: "Data Inc",
    },
    {
      id: 3,
      name: "Jane",
      batchYear: 2022,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      field: "Product Manager",
      company: "Product Co",
    },
    {
      id: 4,
      name: "Alice",
      batchYear: 2019,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      field: "UX Designer",
      company: "Design Studio",
    },
    {
      id: 5,
      name: "Mike",
      batchYear: 2018,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      field: "System Analyst",
      company: "IT Solutions",
    },
    {
      id: 6,
      name: "Sophia",
      batchYear: 2023,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      field: "Marketing Specialist",
      company: "Market Experts",
    },
    {
      id: 7,
      name: "David",
      batchYear: 2017,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      field: "Network Engineer",
      company: "Net Secure",
    },
    {
      id: 8,
      name: "Emily",
      batchYear: 2021,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      field: "Business Analyst",
      company: "Biz Corp",
    },
    {
      id: 9,
      name: "Liam",
      batchYear: 2019,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      field: "Cybersecurity Expert",
      company: "Secure Inc",
    },
    {
      id: 10,
      name: "Emma",
      batchYear: 2022,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      field: "HR Manager",
      company: "HR Solutions",
    },
  ];

  const years = Array.from({ length: 6 }, (_, index) => 2018 + index);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const filteredStudents = selectedYear
    ? studentData.filter((student) => student.batchYear === selectedYear)
    : studentData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="p-3 bg-gray-700 text-white">
        {/* <span className="text-2xm font-semibold">Student Dashboard</span> */}
        Student Dashboard
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-200 p-4 overflow-y-auto hide-scrollbar">
          <h3 className="text-lg font-semibold mb-4">Filter by Year</h3>
          <ul>
            {years.map((year, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded-md ${
                  selectedYear === year
                    ? "bg-gray-300 font-semibold"
                    : "text-gray-600 hover:bg-gray-300"
                }`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="w-4/5 p-4 overflow-y-auto hide-scrollbar">
          {/* Carousel */}
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            showArrows={false}
            className="mb-6"
          >
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="flex justify-center items-center h-96 relative"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="max-h-full max-w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white p-2">
                  <p className="text-lg font-semibold">{student.name}</p>
                  <p className="text-sm">Batch Year: {student.batchYear}</p>
                  <p className="text-sm">Field: {student.field}</p>
                  <p className="text-sm">Company: {student.company}</p>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Grid Layout for Student Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  hide-scrollbar h-96">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="bg-gray-100 p-4 flex flex-col items-center rounded-md"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="h-40 w-auto mb-2 object-cover rounded-md"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold">{student.name}</p>
                  <p className="text-sm">Batch Year: {student.batchYear}</p>
                  <p className="text-sm">Field: {student.field}</p>
                  <p className="text-sm">Company: {student.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-8">
            Around The World
          </h2>
          <div className="flex justify-center space-x-16">
            <div className="text-center">
              <div className="text-4xl font-bold">Jalandhar</div>
              <div className="text-xl mt-2">16882 alumni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">Phagwara</div>
              <div className="text-xl mt-2">4828 alumni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">Hyderabad</div>
              <div className="text-xl mt-2">3231 alumni</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Explore on map
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentDashboard;
