import Movie from "./Components/Movies";
import serisesData from "./api/serisesData.json";

const SerisesPage = () => {
  return (
    <ul className="series-container">
      {serisesData.map((mov, i) => (
        <Movie key={i} {...mov} />
      ))}
    </ul>
  );
};

export default SerisesPage;
