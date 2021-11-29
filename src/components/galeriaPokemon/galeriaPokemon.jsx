import React, { useState, useContext } from "react";
import CardPokemon from "../cardPokemon/cardPokemon";
import Modal from "../modal/modal";
import Home from "../Home/home";
import "../galeriaPokemon/galeriaPokemon.css";
import { contextInfo } from "../contextInfo/contextInfo.jsx";



const pokemonGallery = (props) => {
  return (
    
    <div>
      <contextInfo.Consumer>
       {(props)=> {
         console.log(<CardPokemon/>)
         return <p>oi</p>

       }}
      </contextInfo.Consumer>
      
      <div className="container-pokemon">
        
        {props.pokemonList.map((pokemon, index) => (
          <CardPokemon
            deletePokemon={props.deletePokemon}
            key={index}
            pokemonIndex={index}
            pokemon={pokemon}
          ></CardPokemon>
        ))}
        <div className="emptyCard"></div>
        <div className="emptyCard"></div>
      </div>
    </div>
  );
};

export default pokemonGallery;
