import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./assets/fonts/pokemon/PokemonHollow.ttf";
import "./assets/fonts/pokemon/PokemonSolid.ttf";
import Home from "./components/Home/home.jsx";
ReactDOM.render(
  <>
    <Home></Home>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
