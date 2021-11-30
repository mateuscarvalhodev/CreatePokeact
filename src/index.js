import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./assets/fonts/pokemon/PokemonHollow.ttf";
import "./assets/fonts/pokemon/PokemonSolid.ttf";
import Home from "./components/Home/home.jsx";
import PokemonInfoComponent from "./components/PokemonInfo/PokemonInfo.jsx";
import { PokemonListContext } from "./contexts/contextInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <>
    <PokemonListContext>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pokemon-info/:id" element={<PokemonInfoComponent />} />
        </Routes>
      </BrowserRouter>
    </PokemonListContext>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
