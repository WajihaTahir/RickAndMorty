import React from "react";
import "./Modal.css";

const Modal = ({ currentCharacter }) => {
  return (
    <div className="modalcontainer">
      <h4>
        <b>Name:</b> <i>{currentCharacter.name}</i>
      </h4>
      <h4>
        <b>Gender:</b> <i>{currentCharacter.gender}</i>
      </h4>
      <h4>
        <b>Species:</b> <i>{currentCharacter.species}</i>
      </h4>
      <h4 style={{ marginBottom: "30px" }}>
        <b>Status:</b> <i>{currentCharacter.status}</i>
      </h4>
      <img
        src={currentCharacter.image}
        alt=""
        style={{ width: "200px", height: "200px" }}
      ></img>
      <br></br>
      <a href="./App.jsx">
        <button
          type="button"
          className="btn btn-dark mt-4"
          id="closebutton"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </a>
    </div>
  );
};
export default Modal;
