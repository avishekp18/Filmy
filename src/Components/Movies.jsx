import "../Components/movie.css";
const Movie = ({
  name,
  rating,
  img_url,
  description,
  genre,
  cast,
  watch_url,
}) => {
  return (
    <li className="series-card">
      <img
        className="series-image"
        src={img_url}
        alt={name}
        width="40%"
        height="40%"
      />
      <div className="card-content1">
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button className="btn-wtch">Watch Now</button>
        </a>
      </div>
    </li>
  );
};

export default Movie;
