import react from "react";
import "../modal/modal.css";
// import "../../assets/js/main";
export default () => {
  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <div className="form">
          <div className="form-header">
            <h2>New Pokemon</h2>
            <div class="close-button">X</div>
          </div>
          <form action="">
            {/* <div className="input-group">
              <label class="sr-only" for="name">
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
          <div class="form-group">
            <label class="form-label"></label>
            <input
              type="text"
              id="PokemonName"
              name="PokemonName"
              class="form-control"
              placeholder="Pokemon Name..."
            />
          </div>
          <div class="form-group">
            <label class="form-label">Send Files:</label>
            <input
              id="file-input"
              class="input"
              type="file"
              name="image[]"
              multiple="multiple"
            />
            <div class="select-files">Select Pictures</div>
            <div id="preview"></div>
          </div>
         </div>
      </div>
    </div>
  );
};
