import React from "react";
import "./cardPokemon.css";
// import ImagePokemon from "../../assets/images/charizardbaby.png";
export default (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img
            className="card-icon"
            alt="Card"
            title="card-icon"
            width="100"
            height="100"
            src={props.image}
          />
          
          <div className="card-content">
            <p>
              <span>{props.name}</span>
              
            </p>
            <p>
              <span>{props.type}</span>
              
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};
