import Navbar, { Footer } from "./Components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import MovieBrowser from "./Home.jsx"; // ✅ Add this import
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <MovieBrowser />

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
          href="https://www.linkedin.com/in/avishek-pradhan/"
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
