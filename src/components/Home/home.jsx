import React, {useState} from 'react';
import Header1 from "../../components/header/header.jsx"
import GaleriaPokemon from "../galeriaPokemon/galeriaPokemon"
import Modal from "../modal/modal";
export default () => {
    const [isOpenModal, setValueOpenModal]= useState(false);
    function openModal(){
        setValueOpenModal(true)
        console.log(isOpenModal);
    }

    const closeModal = () => {
        setValueOpenModal(false);
    }
    const submitPokemon = (e) => {
        e.preventDefault();
        const inputData = e.target;
        
        if (!isFormValid(inputData)) {
          alert ("Fill all the fields");
        } else {
            const pokemon ={
              name: inputData.name.value,
              type: inputData.type.value,
              image: inputData.image.src
              };
            addPokemon([...pokemonList, pokemon])
            setOpenModal(false);
            
            };
          };
return(
    <>
      <Header1 openModal={openModal}></Header1>
      <Modal submitPokemon={submitPokemon} open={isOpenModal} close={closeModal} />
      <GaleriaPokemon />
    </>
    
    );
};