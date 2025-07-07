import Movie from "./Movies";
import serisesData from "../api/serisesData.json";

const MovieC = () => {
  return (
    <ul>
      {serisesData.map((mov, i) => (
        <Movie key={i} {...mov} />
      ))}
    </ul>
  );
};

export default MovieC;
