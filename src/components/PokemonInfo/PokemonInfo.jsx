import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router";
import { usePokemonListContext } from "../../contexts/contextInfo";
import "./PokemonInfo.css";

export default () => {
  const fileInput = useRef(null);

  const [pokemon, setPokemon] = useState({});

  const { pokemonList, setPokemonList } = usePokemonListContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const _pokemonList = localStorage.getItem("pokemonList");
    if (_pokemonList && (!pokemonList || pokemonList.length === 0)) {
      const localPokemonList = JSON.parse(_pokemonList);
      setPokemonList(localPokemonList);
    }
  }, []);

  useEffect(() => {
    setPokemon(pokemonList.find((pokemon) => pokemon.id === id));
  }, [pokemonList]);

  if (id == "" || id == undefined || id == null) {
    navigate("/");
  }

  const goBack = () => {
    navigate("/");
  };

  const updatePokemon = () => {
    if (isEmptyOrNull(pokemon.pokemonImage)) {
      alert("Você precisa adicionar uma imagem!");
    } else if (isEmptyOrNull(pokemon.pokemonName)) {
      alert("Você precisa adicionar um nome!");
    } else if (isEmptyOrNull(pokemon.pokemonType)) {
      alert("Você precisa adicionar um tipo!");
    } else if (isEmptyOrNull(pokemon.pokemonInfo)) {
      alert("Você precisa adicionar informações sobre o pokemon!");
    } else {
      const newPokemonList = pokemonList.map((_pokemon) => {
        return _pokemon.id === pokemon.id ? pokemon : _pokemon;
      });
      setPokemonList(newPokemonList);
      localStorage.setItem("pokemonList", JSON.stringify(newPokemonList));

      navigate("/");
    }
  };

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
      setPokemon({ ...pokemon, pokemonImage: image });
    } catch (error) {
      alert("Erro ao carregar imagem.");
      console.error("Erro ao carregar imagem.", error);
    }
  };

  const updatePokemonName = (event) => {
    setPokemon({ ...pokemon, pokemonName: event.target.value });
  };

  const updatePokemonType = (event) => {
    setPokemon({ ...pokemon, pokemonType: event.target.value });
  };

  const updatePokemonInfo = (event) => {
    setPokemon({ ...pokemon, pokemonInfo: event.target.value });
  };

  const isEmptyOrNull = (value) => {
    return value === undefined || value === null || value === "";
  };

  return !pokemon ? (
    <Fragment>
      <div className="content">
        <div className="title">"Nenhum pokemon encontrado"</div>
        <div className="back-button" onClick={goBack}>
          Voltar
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="content">
        <div className="form-header">
          <div className="title">{pokemon.name}</div>
          <div className="close-button" onClick={goBack}>
            Voltar
          </div>
        </div>
        <div className="form">
          <input
            type="text"
            id="pokemon-name"
            name="pokemon-name"
            className="form-control"
            placeholder="Pokemon Name..."
            defaultValue={pokemon.pokemonName || ""}
            onChange={updatePokemonName}
          />
          <input
            type="text"
            id="pokemon-type"
            name="pokemon-type"
            className="form-control type"
            placeholder="Pokemon Type..."
            defaultValue={pokemon.pokemonType || ""}
            onChange={updatePokemonType}
          />
          <div className="form-group">
            <textarea
              type="text"
              id="textarea"
              className="form-control"
              placeholder="About this Pokemon..."
              defaultValue={pokemon.pokemonInfo || ""}
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
            {pokemon.pokemonImage ? (
              <img
                className="pokemon-preview-image"
                src={pokemon.pokemonImage}
              />
            ) : (
              <div></div>
            )}
          </div>
          <div className="add-button-container">
            <button onClick={updatePokemon} className="add-button">
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
