import react from "react";
import lupa from "../../assets/images/lupa.png";
import "../header/header.css";
export default (props) => {
  const searchPokemonList = (event) => {
    const searchTerm = event.target.value;
    console.log({ searchTerm });
    props.searchPokemon(searchTerm);
  };

  return (
    <div>
      <div className="custom-navbar">
        <div className="navbar-brand">HOME</div>
        <input
          type="search"
          className="form-control rounded search-input"
          placeholder="Search Pokemon"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={searchPokemonList}
          name="searchPokemonInput"
        />
        <div className="nav-item-empty"></div>
        <div className="add-button" id="button" onClick={props.openModal}>
          Add Pokemon..{" "}
        </div>
      </div>
    </div>
  );
};
