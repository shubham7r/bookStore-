import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses"; // ✅ Corrected path
import { Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
