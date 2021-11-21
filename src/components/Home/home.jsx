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
return(
    <>
      <Header1 openModal={openModal}></Header1>
      <Modal open={isOpenModal} close={closeModal}></Modal>
      <GaleriaPokemon></GaleriaPokemon>
    </>
    
    );
};