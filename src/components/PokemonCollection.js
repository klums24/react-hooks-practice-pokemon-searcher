import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, searchInput}) {
  const sortedArray = pokemon.sort((singlePokemon1, singlePokemon2) => singlePokemon1.id - singlePokemon2.id)
  const searchArray = sortedArray.filter(singlePokemon => singlePokemon.name.includes(searchInput))
  
  return (
    
    <Card.Group itemsPerRow={6}>
      <h1></h1>
      {searchArray.map((singlePokemon) => <PokemonCard {...singlePokemon} key={singlePokemon.id}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
