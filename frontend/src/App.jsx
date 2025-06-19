import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses"; // ✅ Corrected path
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  );
}
