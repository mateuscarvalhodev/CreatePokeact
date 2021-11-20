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
return(
    <>
      <Header1 openModal={openModal}></Header1>
      <Modal open={isOpenModal} ></Modal>
      <GaleriaPokemon></GaleriaPokemon>
    </>
    
    );
};