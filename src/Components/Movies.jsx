import serisesData from "../api/serisesData.json";
import "../Components/movie.css";

const Movie = (props) => {
  const { name, rating, img_url, description, genre, cast, watch_url } = props;
  return (
    <li>
      <div>
        <div>
          <img src={img_url} alt={name} width="40%" height="40%" />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};

export default Movie;
