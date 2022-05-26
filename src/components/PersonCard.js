import { useState } from "react";
import "../style.css";

const PersonCard = (props) => {
  const [count, setCount] = useState(props.age);

  return (
    <div className="App">
      <h1>
        Name: {props.lastName},{props.firstName}
      </h1>
      <h4> Hair Color: {props.hairColor}</h4>
      <h3> Age: {count}</h3>
      <button className="btn" onClick={(age) => setCount(count + 1)}>
        Birthday Button for: {props.firstName}
      </button>
    </div>
  );
};
export default PersonCard;
