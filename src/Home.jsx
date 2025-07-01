// File: src/Pages/MovieBrowser.jsx (or any folder you prefer)

import React, { useState } from "react";
import MovieCard from "./Components/Filmy-Card";
import "./App.css"; // Or reuse App.css if styles are shared
import movies from "./data/movies"; // Import movie data from a separate file

const MovieBrowser = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="movie-container">
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
    </div>
  );
};

export default MovieBrowser;
