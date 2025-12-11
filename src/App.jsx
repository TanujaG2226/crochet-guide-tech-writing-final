import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Guide from "./pages/Guide.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Analysis from "./pages/Analysis.jsx";
import Citations from "./pages/Citations.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* NAVBAR */}

      <nav className="navbar">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/guide" className="nav-link">
            General
          </NavLink>

          <NavLink to="/analysis" className="nav-link">
            Granny Square vs Amigurumi
          </NavLink>

          <NavLink to="/citation" className="nav-link">
            Work Cited
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About Me
          </NavLink>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/citation" element={<Citations />} />
      </Routes>
    </div>
  );
}

export default App;
