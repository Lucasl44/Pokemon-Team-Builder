import React from 'react';
import { useState } from 'react';
import './App.css';
import Pokemon from './components/pokemon';
require('dotenv').config();

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {"pokemon": []};
    try {
      for (let item of pokemonList) {
        obj.pokemon.push(item);
      } 
      } catch (error) {
        console.log(error)
    }
    try {
    const reg = await fetch(`${process.env.REACT_APP_BASE_URL}/pokemon/team`, {
      mode: "cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    });
    const response = await reg.json();
  } catch (error) {
  }
};

  return (
    <div>
      <h1>Pokemon Team Builder</h1>
      <div>
        <Pokemon number={1} pokemonList={pokemonList} setPokemonList={setPokemonList}></Pokemon>
        <Pokemon number={2} pokemonList={pokemonList} setPokemonList={setPokemonList}></Pokemon>
        <Pokemon number={3} pokemonList={pokemonList} setPokemonList={setPokemonList}></Pokemon>
        <Pokemon number={4} pokemonList={pokemonList} setPokemonList={setPokemonList}></Pokemon>
        <Pokemon number={5} pokemonList={pokemonList} setPokemonList={setPokemonList}></Pokemon>
        <Pokemon number={6} pokemonList={pokemonList} setPokemonList={setPokemonList}></Pokemon>
        <p>{pokemonList}</p>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
