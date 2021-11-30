import { createContext, useContext, useState } from "react";

const context = createContext({ pokemonList: [], setPokemonList: () => {} });

const PokemonListContext = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  return (
    <context.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </context.Provider>
  );
};

const usePokemonListContext = () => {
  return useContext(context);
};

export { PokemonListContext, usePokemonListContext };
