import react from "react";
import "./cardPokemon.css";
import ImagePokemon from "../../assets/images/charizardbaby.png"
import PokemonTemplates from "../../assets/images/pokemonTemplate.png"
export default () => {
  return (
    <div>
      
      <div className="card">
        <div className="card-body">
        {/* <img classname="pokemonTemplate" alt="template" tittle="Pokemon-Template" src={PokemonTemplates}></img> */}
          <img className="card-icon" alt="Card" title="card-icon" src={ImagePokemon}/>
          <h5 className="card-title">Charizard</h5>
          <div className="card-content">
            <p>
              <span>Type: </span>
              <span>Fire </span>
            </p>
            <p>
              <span>Weight: </span>
              <span>70kg</span>
            </p>
            <p>
              <span>Height: </span>
              <span>2.10m</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
