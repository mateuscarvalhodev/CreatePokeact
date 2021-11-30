import React from "react";
import CardPokemon from "../cardPokemon/cardPokemon";
import "../galeriaPokemon/galeriaPokemon.css";

const pokemonGallery = (props) => {
  return (
    <div>
      <div className="container-pokemon">
        {props.pokemonList.map((pokemon, index) => (
          <CardPokemon
            deletePokemon={props.deletePokemon}
            key={index}
            pokemonIndex={index}
            pokemon={pokemon}
            onClick={() => {
              console.log("test");
            }}
          ></CardPokemon>
        ))}
        <div className="emptyCard"></div>
        <div className="emptyCard"></div>
      </div>
    </div>
  );
};

export default pokemonGallery;
