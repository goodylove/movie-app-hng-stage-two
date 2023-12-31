import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/index";
import MovieDetails from "./Pages/MovieDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
