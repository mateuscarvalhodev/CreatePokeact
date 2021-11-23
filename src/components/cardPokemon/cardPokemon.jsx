import React from "react";
import "./cardPokemon.css";
// import ImagePokemon from "../../assets/images/charizardbaby.png";
export default (props) => {
  const deletePokemon = () => {
    props.deletePokemon(props.pokemonIndex);
  };
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
            src={props.pokemon.pokemonImage}
          />

          <div className="card-content">
            <p>
              <span>{props.pokemon.pokemonName}</span>
            </p>
            <p>
              <span>{props.pokemon.pokemonType}</span>
            </p>
          </div>
          <div
            onClick={deletePokemon}
            className="delete-button"
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};
