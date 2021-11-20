import react, { useRef, useState } from "react";
import "../modal/modal.css";


export default (props) => {
  if (!props.open) 
    return null;
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


  };

  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <div className="form">
          <div className="form-header">
            <div className="title">New Pokemon</div>
            <div className="close-button">X</div>
          </div>
          <form action="">
            {/* <div className="input-group">
              <label className="sr-only" for="name">
                Pokemon Name
              </label>
              <input
                type="text"
                id="namePokemon"
                name="namePokemon"
                placeholder="Nome do Pokemon..."
              />
            </div> */}
          </form>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              type="text"
              id="PokemonName"
              name="PokemonName"
              className="form-control"
              placeholder="Pokemon Name..."
              onChange={updatePokemonName}
            />
          </div>
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
        </div>
        <div className="add-button-container">
          <div onClick={addPokemon} className="add-button">
            Adicionar
          </div>
        </div>
      </div>
    </div>
  );
};
