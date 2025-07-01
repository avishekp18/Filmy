import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
            <li>𝘊𝘰𝘯𝘵𝘢𝘤𝘵: 7735339717</li>
            <li>𝘌𝘮𝘢𝘪𝘭: 𝘢𝘷𝘪𝘴𝘩𝘦𝘬𝘱𝘳𝘢𝘥𝘩𝘢𝘯24@𝘨𝘮𝘢𝘪𝘭.𝘤𝘰𝘮</li>
          </ul>
        </div>
      </header>

      <nav className="nav">
        <div className="logo">
          <span className="hamburger" onClick={() => setIsOpen(true)}>
            ☰
          </span>
          <span className="text">Avishek Pradhan</span>
        </div>

        <div className="links">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          <Link to="login" smooth={true} duration={500}>
            Log In
          </Link>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setIsOpen(false)}>
          ✕
        </span>
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="login"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Log In
        </Link>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Navbar;

export const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Indian Cricketer</h2>
          <p>Celebrating legends of Indian Cricket</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#players">Players</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <p>Email: avishekpradhan24@gmail.com</p>
          <p>Phone: +91 7735339717</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Avishek Pradhan • All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};
