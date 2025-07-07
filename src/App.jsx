import Navbar, { Footer } from "./Components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Movie from "./Components/Movies.jsx"; // ✅ Capitalize import

import "./App.css";
import MovieC from "./Components/Moviecard.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home /> {/* Or MovieBrowser if that's separate */}
      <MovieC /> {/* ✅ Capitalized component usage */}
      <Footer />
      <div className="floating-social">
        <a
          href="https://wa.me/917735339717"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞
        </a>
        <a href="mailto:avishekpradhan24@gmail.com">✉️</a>
        <a
          href="www.linkedin.com/in/avishek-pradhan-83073a313"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼
        </a>
      </div>
    </>
  );
}

export default App;
