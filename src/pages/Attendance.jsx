import React, { useState } from "react";
import Chart from "react-apexcharts";
function Attendance() {
  // Sample data for attendance
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aditya Sharma",
      rollNumber: "A001",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 85,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 2,
      name: "Aarav Patel",
      rollNumber: "A002",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: false,
      attendancePercentage: 72,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 3,
      name: "Ishaan Kumar",
      rollNumber: "A003",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 90,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 4,
      name: "Aryan Gupta",
      rollNumber: "A004",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: false,
      attendancePercentage: 65,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 5,
      name: "Advika Singh",
      rollNumber: "A005",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 78,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 6,
      name: "Kavya Mishra",
      rollNumber: "A006",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 92,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 7,
      name: "Vihaan Reddy",
      rollNumber: "A007",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: false,
      attendancePercentage: 70,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 8,
      name: "Ananya Desai",
      rollNumber: "A008",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 84,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 9,
      name: "Reyansh Joshi",
      rollNumber: "A009",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 88,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 10,
      name: "Saanvi Choudhury",
      rollNumber: "A010",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: false,
      attendancePercentage: 60,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 11,
      name: "Aadit Khanna",
      rollNumber: "A011",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 79,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 12,
      name: "Anvi Malhotra",
      rollNumber: "A012",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: false,
      attendancePercentage: 73,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 13,
      name: "Shaurya Banerjee",
      rollNumber: "A013",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 91,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 14,
      name: "Diya Verma",
      rollNumber: "A014",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 82,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 15,
      name: "Yuvraj Nair",
      rollNumber: "A015",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: false,
      attendancePercentage: 68,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 16,
      name: "Aanya Bhat",
      rollNumber: "A016",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 87,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 17,
      name: "Atharv Kapoor",
      rollNumber: "A017",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 83,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 18,
      name: "Anaya Reddy",
      rollNumber: "A018",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: false,
      attendancePercentage: 75,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 19,
      name: "Advaita Gupta",
      rollNumber: "A019",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 89,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
    {
      id: 20,
      name: "Aaradhya Kumar",
      rollNumber: "A020",
      image:
        "https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg",
      present: true,
      attendancePercentage: 95,
      state: {
        options: {
          chart: {
            id: "Attendance",
          },
          xaxis: {
            categories: [
              "January ",
              "Feburary",
              "March",
              "April ",
              "May ",
              "June ",
              "July ",
              "August ",
              "September ",
              "October ",
              "november",
              "December ",
            ],
          },
        },
        series: [
          {
            name: "Lecture",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 150, 175],
          },
          {
            name: "Practical",
            data: [
              40, 50, 60, 70, 58, 48, 65, 95, 130, 50, 150, 25, 95, 96, 150,
              179,
            ],
          },
        ],
      },
    },
  ]);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleShowDetails = (student) => {
    setSelectedStudent(student);
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
    setSelectedStudent(null);
  };

  return (
    <div className="flex h-[90vh]">
      <div className="w-64 bg-gray-100 p-4 ">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold">Attendence</h1>
          <div
            disabled
            className=" bg-[#176A79]  text-white font-bold py-2 px-4 rounded"
          >
            Computer
          </div>
        </div>
        <ul className="list-none mb-4">
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-tachometer-alt mr-2"></i>N1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-th-list mr-2"></i>N2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-user-cog mr-2"></i>N3
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4 h-[90vh] overflow-scroll">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Attendance</h2>
          {showDetails ? (
            <button
              onClick={handleHideDetails}
              className="bg-[#176A79] hover:bg-[#176A79]-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          ) : null}
        </div>
        {showDetails ? (
          <div className="grid grid-cols-1 gap-4 mb-4 h-90vh">
            <div className="bg-white p-4 rounded shadow h-full">
              <img
                src={selectedStudent.image}
                alt={selectedStudent.name}
                className="rounded-full w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-bold">{selectedStudent.name}</h3>
              <p>Enrollment Number: {selectedStudent.rollNumber}</p>
              <p>
                Attendance Percentage : {selectedStudent.attendancePercentage}
              </p>
              <Chart
                options={selectedStudent.state.options}
                series={selectedStudent.state.series}
                type="line"
                width={1000}
                height={400}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-white p-4 rounded shadow cursor-pointer"
                onClick={() => handleShowDetails(student)}
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="rounded-full w-24 h-24 mb-4"
                />
                <h3 className="text-lg font-bold">{student.name}</h3>
                <p>Roll Number: {student.rollNumber}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Attendance;
