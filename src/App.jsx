import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Guide from "./pages/Guide.jsx";
import AboutMe from "./pages/AboutMe.jsx";

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
            Guide
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
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
