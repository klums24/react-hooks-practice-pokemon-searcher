import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState("")
 
  function handleNewPokemon(newPokemonObj){
    setPokemon([...pokemon, newPokemonObj])
  }

  function userSearchInput(e){
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(data => {
    setPokemon(data)
    })
    
  }, [])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search userSearchInput={userSearchInput} searchInput={searchInput}/>
      <br />
      <PokemonCollection pokemon={pokemon} searchInput={searchInput}/>
    </Container>
  );
}

export default PokemonPage;
