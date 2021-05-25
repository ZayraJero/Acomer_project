<<<<<<< HEAD
=======
import React from "react";
>>>>>>> origin/feature/zayra
import { Button } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import "./styles.scss";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

=======
import "./styles.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };
>>>>>>> origin/feature/zayra
  const less = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
<<<<<<< HEAD

  return (
    <div className="counter">
      <Button className="button" variant="primary" onClick={less}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <h1 className="number">{counter}</h1>
      <Button className="button" variant="primary" onClick={add}>
=======
  return (
    <div className="counter">
      <Button
        style={{
          backgroundColor: "#F2F2F2",
          border: "none",
          borderRadius: "25px",
          color: "#000000",
        }}
        onClick={less}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <h1 className="number">{counter}</h1>
      <Button
        style={{
          backgroundColor: "#F2F2F2",
          border: "none",
          borderRadius: "25px",
          color: "#000000",
        }}
        onClick={add}
      >
>>>>>>> origin/feature/zayra
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default Counter;
