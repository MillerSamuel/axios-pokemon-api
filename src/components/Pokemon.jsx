import React, { useState } from "react";
import axios from "axios";

const Pokemon = () => {

    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                console.log("got response", response)
                setPokemonList(response.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            <button onClick={getPokemon}>Get all Pokemon</button>
            {pokemonList.map((onepoke,idx)=>{
                    return(
                        <>
                            <h3>{onepoke.name}</h3>
                        </>
                    )
                })}
        </>
    )
}


export default Pokemon