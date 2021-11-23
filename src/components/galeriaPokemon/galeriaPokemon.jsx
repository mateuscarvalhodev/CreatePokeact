import React, {useState} from "react";
import CardPokemon from "../cardPokemon/cardPokemon";
import Modal from "../modal/modal";
import Home from "../Home/home";
import "../galeriaPokemon/galeriaPokemon.css";


const galleryPokemon = () => {
  const [pokemonList, addPokemon] = useState([]);
  const [isOpenModal, setValueOpenModal]= useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const isFormValid = (inputData) => {
    return (
      inputData.name.value !== "" &&
      inputData.type.value !== "" &&
      inputData.image.value !== "" 
    );
  };


  
  
return(
    <div>
      
      <div className="container-pokemon">
        {pokemonList.map((pokemon, i) => (
          <Card
            key={i}
            name={pokemon.name}
            type={pokemon.type}
            image={pokemon.image}
          ></Card>
    ))}
        <div className="emptyCard"></div>
        <div className="emptyCard"></div>
  </div>
  
  </div>
  );
};

export default (galleryPokemon);

// export default () => {
//   return (
//     <>
      
//       <div className="container-pokemon">
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//         <CardPokemon></CardPokemon>
//       </div>
//     </>
//   );
// };
