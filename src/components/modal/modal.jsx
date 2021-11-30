import React, { useRef, useState } from "react";
import { Fragment } from "react";
import "../modal/modal.css";

export default (props) => {
  if (!props.open) return null;
  const fileInput = useRef(null);

  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState("");

  const selectPictureButtonAction = () => {
    fileInput?.current?.click();
  };

  const getBase64FromFile = (file) => {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  };

  const updateFileList = async () => {
    try {
      const image = await getBase64FromFile(fileInput.current.files[0]);
      setPokemonImage(image);
    } catch (error) {
      alert("Erro ao carregar imagem.");
      console.error("Erro ao carregar imagem.", error);
    }
  };

  const updatePokemonName = (event) => {
    setPokemonName(event.target.value);
  };

  const updatePokemonType = (event) => {
    setPokemonType(event.target.value);
  };

  const updatePokemonInfo = (event) => {
    setPokemonInfo(event.target.value);
  };

  const isEmptyOrNull = (value) => {
    return value === undefined || value === null || value === "";
  };

  const addPokemon = () => {
    console.log(pokemonImage);
    if (isEmptyOrNull(pokemonImage)) {
      alert("Você precisa adicionar uma imagem!");
    } else if (isEmptyOrNull(pokemonName)) {
      alert("Você precisa adicionar um nome!");
    } else if (isEmptyOrNull(pokemonType)) {
      alert("Você precisa adicionar um tipo!");
    } else if (isEmptyOrNull(pokemonInfo)) {
      alert("Você precisa adicionar informações sobre o pokemon!");
    } else {
      const pokemon = {
        pokemonName,
        pokemonType,
        pokemonImage,
        pokemonInfo,
        id: Math.random().toString(36).slice(2),
      };
      console.log("pokemon criado!", pokemon);
      props.submitPokemon(pokemon);
      props.close();
    }
  };

  return (
    <Fragment>
      <div onClick={props.close} className="modal-overlay active"></div>
      <div className="modal-content">
        <div className="form">
          <div className="form-header">
            <div className="title">New Pokemon</div>
            <div className="close-button" onClick={props.close}>
              X
            </div>
          </div>
          <div className="form">
            <input
              type="text"
              id="pokemon-name"
              name="pokemon-name"
              className="form-control"
              placeholder="Pokemon Name..."
              value={pokemonName}
              onChange={updatePokemonName}
            />
            <input
              type="text"
              id="pokemon-type"
              name="pokemon-type"
              className="form-control type"
              placeholder="Pokemon Type..."
              onChange={updatePokemonType}
            />
            <div className="form-group">
              <textarea
                type="text"
                id="textarea"
                className="form-control"
                placeholder="About this Pokemon..."
                onChange={updatePokemonInfo}
              ></textarea>
            </div>
            <div className="form-group files">
              <input
                id="file-input"
                className="input"
                type="file"
                name="image"
                accept="image/png, image/jpeg"
                ref={fileInput}
                onChange={updateFileList}
              />
              <div onClick={selectPictureButtonAction} className="select-files">
                Select Pictures
              </div>
            </div>
            <div id="preview">
              {pokemonImage ? (
                <img className="pokemon-preview-image" src={pokemonImage} />
              ) : (
                <div></div>
              )}
            </div>
            <div className="add-button-container">
              <button onClick={addPokemon} className="add-button">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
