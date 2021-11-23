import React, { useRef, useState } from "react";
import "../modal/modal.css";



export default (props) => {
  if (!props.open) return null;
  const fileInput = useRef(null);

  const [pokemonPreviewImage, setPokemonPreviewImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  const selectPictureButtonAction = () => {
    fileInput?.current?.click();
  };

  const isFileImage = (file) => {
    const imageTest = ["img", "image"];
    return imageTest.some((imageType) => file.type.includes(imageType));
  };

  const updateFileList = () => {
    try {
      const image = fileInput.current.files[0];
      setPokemonPreviewImage(image);
    } catch (error) {
      alert("Erro ao carregar imagem.");
      console.error("Erro ao carregar imagem.", error);
    }
  };

  const updatePokemonName = (event) => {
    setPokemonName(event.target.value);
  };

  const addPokemon = () => {
    const pokemon = {
      name: pokemonName.current,
      image: URL.createObjectURL(pokemonPreviewImage.current),
    };
    console.log(pokemon);
  };

  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <div className="form">
          <div className="form-header">
            <div className="title">New Pokemon</div>
            <div className="close-button" onClick={props.close}>
              X
            </div>
          </div>
          <form onsubmit={addPokemon} className="form">
            <input
              type="text"
              id="PokemonName"
              name="PokemonName"
              className="form-control"
              placeholder="Pokemon Name..."
              // onChange={updatePokemonName}
              required
            />
            <input
              type="text"
              id="TypePokemon"
              name="TypePokemon"
              className="form-control"
              placeholder="Pokemon Type..."
              // onChange={updatePokemonName}
              required
            />
            
            {/* <select className="form-select" aria-label="Default select example" id="type" name="type">
              <option selected>Select the type..</option>
              <option value="Normal">Normal</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Grass">Grass</option>
              <option value="Electric">Electric</option>
              <option value="Ice">Ice</option>
              <option value="Fighting">Fighting</option>
              <option value="Poison">Poison</option>
              <option value="Ground">Ground</option>
              <option value="Flying">Flying</option>
              <option value="Psychic">Psychic</option>
              <option value="Bug">Bug</option>
              <option value="Rock">Rock</option>
              <option value="Ghost">Ghost</option>
              <option value="Dark">Dark</option>
              <option value="Dragon">Dragon</option>
              <option value="Steel">Steel</option>
              <option value="Fairy">Fairy</option>
            </select> */}
            <div className="form-group files">
              <input
                
                id="file-input"
                className="input"
                type="file"
                name="image"
                accept="image/png, image/jpeg"
                ref={fileInput}
                value={pokemonName}
                onChange={updateFileList}
                required
              />
              <div onClick={selectPictureButtonAction} className="select-files">
                Select Pictures
              </div>
            </div>
            <div id="preview">
              {pokemonPreviewImage ? (
                <img
                  className="pokemon-preview-image"
                  src={URL.createObjectURL(pokemonPreviewImage)}
                />
              ) : (
                <div></div>
              )}
            </div>
        <div className="add-button-container">
          
          <button type="submit" className="add-button">
                  Adicionar
                </button>
            
          
        </div>
          </form>
        </div>
      </div>
    </div>
  );
};
