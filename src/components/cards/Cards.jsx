import React from "react";
import "./Cards.css";

const cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image } = x;

      return (
        <div
          key={id}
          className="col-4"
          style={{ margin: "10px", padding: "50px" }}
        >
          <h5>{name}</h5>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={image} alt=""></img>
              </div>
              <div className="flip-card-back">
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No characters found :(";
  }

  return <>{display}</>;
};

export default cards;
