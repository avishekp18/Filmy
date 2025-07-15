import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar, { Footer } from "./Components/Nav.jsx";
import MovieBrowser from "./Home.jsx";
import SerisesPage from "./Serises.jsx";
import "font-awesome/css/font-awesome.min.css";
// import CountryStateCity from "./dropdown.jsx";
import { EventProps } from "./EventProps.jsx";
import { StateUser } from "./Components/hooks/State.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme class
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<MovieBrowser />} />
        <Route path="/Filmy" element={<SerisesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <CountryStateCity /> */}
      <Footer />
      <EventProps />
      <StateUser />

      <div className="floating-social">
        <a
          href="https://linkedin.com/in/avishek-pradhan-83073a313"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼
        </a>
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </>
  );
}
