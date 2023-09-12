import Home from "./Pages/Home/index";
import MovieDetails from "./Pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieDetails />} />
        <Route path="/moviedetails/:id" element={<Home />} />
        <Route path="*" element={"page 404"} />
      </Routes>
      {/* <MovieDetails /> */}
    </div>
  );
}

export default App;
