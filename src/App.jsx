import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Placements from "./components/Placements";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar";
import Attendance from "./components/Attendance";
import Dashboard from "./components/Dashboard";
import Alumini from "./components/Alumini";
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
          <Route path="/Alumini" element={<Alumini />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
