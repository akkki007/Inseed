import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Placements from "./pages/Placements";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Course from "./components/Course";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses/:cname" element={<Course />} />
          <Route path="/courses/Computer%20Engineering" element={<Course/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
