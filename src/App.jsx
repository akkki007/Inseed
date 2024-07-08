import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Placements from "./pages/Placements";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Attendance from "./pages/Attendance";
import Alumni from "./pages/Alumni";
import Dashboard from "./pages/Dashboard";
import Course from "./components/Course";
import About from "./pages/About";
import Footer from "./components/Footer";

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
          <Route path="/About" element={<About/>}/>
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses/:cname" element={<Course />} />
          <Route path="/Community" element={<Alumni />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
