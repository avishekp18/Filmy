// statusbar function

const statusbar = (age) => {
  if (age < 30) {
    return "Young Player";
  } else if (age >= 30 && age < 35) {
    return "Experienced Player";
  } else if (age >= 35) {
    return "Veteran Player";
  }
};

// container
const Card = ({ name, age, summary, image }) => (
  <div className="Container">
    <div className="Image">
      <img src={image} alt={name} />
    </div>
    <div className="Summary">
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p>Summary: {summary}</p>
      <button>{statusbar(age)}</button>
    </div>
  </div>
);

export default Card;
