import React from "react";
import { useNavigate } from "react-router";
import "./cardPokemon.css";

export default (props) => {
  const deletePokemon = () => {
    props.deletePokemon(props.pokemonIndex);
  };

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/pokemon-info/${props.pokemon.id}`)}>
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
          <div onClick={deletePokemon} className="delete-button">
            X
          </div>
        </div>
      </div>
    </div>
  );
};
