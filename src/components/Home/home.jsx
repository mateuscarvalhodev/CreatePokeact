import React, { useEffect, useState } from "react";
import Header1 from "../../components/header/header.jsx";
import { InfoContext } from "../contextInfo/contextInfo.jsx";
import GaleriaPokemon from "../galeriaPokemon/galeriaPokemon";
import Modal from "../modal/modal";
export default () => {
  const [isOpenModal, setValueOpenModal] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListBackup, setPokemonListBackup] = useState([]);

  useEffect(() => {
    const pokemonList = localStorage.getItem("pokemonList");
    if (pokemonList) {
      setPokemonList(JSON.parse(pokemonList));
    }
  }, []);

  const addNewPokemon = (pokemon) => {
    const newPokemonList = [...pokemonList, pokemon];
    setPokemonList(newPokemonList);
    localStorage.setItem("pokemonList", JSON.stringify(newPokemonList));
  };

  function openModal() {
    setValueOpenModal(true);
    console.log(isOpenModal);
  }

  const closeModal = () => {
    setValueOpenModal(false);
  };

  const submitPokemon = (pokemonData) => {
    addNewPokemon(pokemonData);
  };

  const deletePokemon = (indexForDeletion) => {
    console.log(indexForDeletion);
    const newPokemonList = pokemonList.filter(
      (p, index) => index != indexForDeletion
    );
    setPokemonList(newPokemonList);
    localStorage.setItem("pokemonList", JSON.stringify(newPokemonList));
  };

  const searchPokemon = (value) => {
    if (value == "") {
      console.log("empty");
      setPokemonList([...pokemonListBackup]);
      setPokemonListBackup([]);
    } else {
      if (pokemonListBackup.length == 0) {
        console.log("setting pokemonList backup");
        setPokemonListBackup(pokemonList);
      }

      const newPokemonList = pokemonList.filter(
        (pokemon) =>
          pokemon.pokemonName.includes(value) ||
          pokemon.pokemonType.includes(value)
      );

      setPokemonList(newPokemonList);
    }
  };

  return (
    <>
      <Header1 searchPokemon={searchPokemon} openModal={openModal}></Header1>
      <Modal
        submitPokemon={submitPokemon}
        open={isOpenModal}
        close={closeModal}
      />
      <GaleriaPokemon deletePokemon={deletePokemon} pokemonList={pokemonList} />
    </>
  );
};

function app(){
  const Router = () => {
    const location = window.location.pathname
    if (location === '/cardPokemon'){
      return <cardPokemon />;
    } else {
      return <Home />;
    }
  }
  return(
    <>
    {Router()}
    </>
  )
}

// export default Home;