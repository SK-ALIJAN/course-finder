import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "../components/Student-Dashboard/StudentDashboard";
import CourseDetails from "../components/CourseDetails";
import Profile from "../components/Profile";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentDashboard />} />
      <Route path="/details" element={<CourseDetails />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoute;
