import React, { useState } from 'react';

const Pokemon = ({number, pokemonList, setPokemonList}) => {
    const [pokemon, setPokemon] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setPokemonList(prevPokemon => [...prevPokemon, pokemon]);
        console.log(process.env.REACT_APP_BASE_URL)
    };

    return (
        <div>
            <form>
                <label>
                    {number}. Enter a Pokemon:
                    <input type="text" onChange={(e) => {
                        setPokemon(e.target.value)
                    }}></input>
                </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Pokemon;