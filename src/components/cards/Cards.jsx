import React from "react";
import "./Cards.css";

const cards = ({ results, onButtonPressed, onCharacterSelected, search }) => {
  let display;

  function onButtonClick(character) {
    onButtonPressed(true);
    onCharacterSelected(character);
    
  }

  if (results) {
    display = results.map((search) => {
      let { id, name, image } = search;

      return (
        <div key={id} className="col-3" style={{ padding: "30px" }}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={image}
                  alt=""
                  style={{ border: "solid 2px black" }}
                ></img>
              </div>
              <div className="flip-card-back">
                <h5 style={{ textAlign: "center", marginTop: "35px" }}>
                  {name}
                </h5>
                <button
                  onClick={() => {
                    onButtonClick(search);
                  }}
                >
                  Learn More
                </button>
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
