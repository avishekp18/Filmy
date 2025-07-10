// Home.jsx
import React, { useState } from "react";
import MovieCard from "./Components/Filmy-Card";
import "./App.css";
import movies from "./data/movies";

const MovieBrowser = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="movie-container" id="home">
      <h1>🎬 MyFilmy Browser</h1>

      <div className="card-grid">
        {movies.map((movie, i) => (
          <MovieCard
            key={i}
            {...movie}
            onWatch={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            <iframe
              src={selectedMovie.iframeSrc}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              title={selectedMovie.title}
            />
            <button
              className="close-btn"
              onClick={() => setSelectedMovie(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Scroll sections */}
      <div id="about" style={{ padding: "60px 0", textAlign: "center" }}>
        <h2>About</h2>
        <p>This is a React Movie Browser built by Avishek.</p>
      </div>

      <div id="contact" style={{ padding: "60px 0", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: avishekpradhan24@gmail.com | Phone: 7735339717</p>
      </div>

      <div id="login" style={{ padding: "60px 0", textAlign: "center" }}>
        <h2>Login</h2>
        <p>Login section coming soon...</p>
      </div>
    </div>
  );
};

export default MovieBrowser;
