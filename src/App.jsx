import React from 'react';
import { useState } from 'react';
import './App.css';
import Pokemon from './components/pokemon';

function App() {
  const [type, setType] = useState([]);

  const handleSubmit = () => {
    console.log(type)
  };

  return (
    <div>
      <h1>Pokemon Team Builder</h1>
      <div>
        <Pokemon number={1} types={type} setTypes={setType}></Pokemon>
        <Pokemon number={2}  types={type} setTypes={setType}></Pokemon>
        <Pokemon number={3} types={type} setTypes={setType}></Pokemon>
        <Pokemon number={4} types={type} setTypes={setType}></Pokemon>
        <Pokemon number={5} types={type} setTypes={setType}></Pokemon>
        <Pokemon number={6} types={type} setTypes={setType}></Pokemon>
        <p>{type}</p>
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
