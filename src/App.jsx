import React from "react";
import { Box } from "@mui/material";
import {Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Home, ExerciseDetail, Footer } from "./components";

function App() {
  return (
    <Box sx={{ color: "black" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
