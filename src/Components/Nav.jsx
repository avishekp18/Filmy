// src/Components/Nav.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Nav.css";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Apply theme class
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <>
      <header className="header">
        <div className="portfolio">
          <h1>ғ𝒾Įℓ𝓂ץ</h1>
        </div>
        <div className="contact-info">
          <ul>
            <li>Contact: 7735339717</li>
            <li>Email: avishekpradhan24@gmail.com</li>
          </ul>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-left">
          <span className="hamburger" onClick={() => setIsOpen(true)}>
            ☰
          </span>
          <span className="logo-text">Avishek Pradhan</span>
        </div>

        <div className="links">
          <RouterLink to="/">Home</RouterLink>
          <ScrollLink to="about" smooth duration={500}>
            About
          </ScrollLink>
          <RouterLink to="/Filmy">Series</RouterLink>
          <ScrollLink to="contact" smooth duration={500}>
            Contact
          </ScrollLink>
          <ScrollLink to="login" smooth duration={500}>
            Log In
          </ScrollLink>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* Sidebar (mobile) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setIsOpen(false)}>
          ✕
        </span>
        <RouterLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </RouterLink>
        <ScrollLink
          to="about"
          smooth
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          About
        </ScrollLink>
        <RouterLink to="/Filmy" onClick={() => setIsOpen(false)}>
          Series
        </RouterLink>
        <ScrollLink
          to="contact"
          smooth
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </ScrollLink>
        <ScrollLink
          to="login"
          smooth
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Log In
        </ScrollLink>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export const Footer = () => (
  <footer className="footer-modern">
    <div className="footer-container">
      <div className="footer-logo">
        <h2>Indian Cinema</h2>
        <p>Enjoying the best of Indian Cinema</p>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#players">Players</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-contact">
        <p>Email: avishekpradhan24@gmail.com</p>
        <p>Phone: +91 7735339717</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Avishek Pradhan • All Rights Reserved</p>
    </div>
  </footer>
);
