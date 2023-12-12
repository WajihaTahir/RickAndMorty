import React from "react";
import "./Cards.css";


const cards = ({ results, onButtonPressed, onCharacterSelected }) => {
  let display;

  function onButtonClick(character){
    onButtonPressed(true);
    onCharacterSelected(character);
  }

  if (results) {
    display = results.map((x) => {
      let { id, name, image } = x;

      return (
        <div
          key={id}
          className="col-4"
          style={{ marginLeft: "200px", padding: "30px" }}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={image} alt=""></img>
              </div>
              <div className="flip-card-back">
              <h5 style={{textAlign:"center", marginTop:"35px"}}>{name}</h5>
                <button onClick={()=>{onButtonClick(x)}}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    
    display =  "No characters found :(";
  }

  return <>{display}</>;
};

export default cards;
