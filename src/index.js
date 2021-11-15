import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Header1 from './components/header/header.jsx';
import GaleriaPokemon from './components/galeriaPokemon/galeriaPokemon.jsx';

import './assets/fonts/pokemon/PokemonHollow.ttf';
import './assets/fonts/pokemon/PokemonSolid.ttf';

ReactDOM.render(
   <>
    <Header1></Header1>
    <GaleriaPokemon></GaleriaPokemon>
    
   </> 
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
