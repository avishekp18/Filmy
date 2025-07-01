import "./Filmy-card.css";

const MovieCard = ({ title, ageRating, summary, image, tag, onWatch }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>
          <strong>Rating:</strong> {ageRating}
        </p>
        <p>
          <strong>Summary:</strong> {summary}
        </p>
        <div className="card-buttons">
          <button className="tag-button">{tag}</button>
          <button className="watch-button" onClick={onWatch}>
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
