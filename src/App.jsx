import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Guide from "./pages/Guide.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Analysis from "./pages/Analysis.jsx";
import Citations from "./pages/Citations.jsx";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/guide"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            General
          </NavLink>

          <NavLink
            to="/analysis"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Granny Square vs Amigurumi
          </NavLink>
          <NavLink
            to="/citation"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Work Citied
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
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
