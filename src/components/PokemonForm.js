import React, {useState, useEffect} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: null,
    sprites: {
      front: "",
      back: ""
    }
  })
  


  const addNewPokemon = ()=> {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(data => {
      handleNewPokemon(data)
    })
  }

  function handleOnChangeForm(e) {
    if(e.target.id === "frontUrl") {
      setNewPokemon({...newPokemon, sprites: {...newPokemon.sprites, front: e.target.value}})
     
    }else if(e.target.id === "backUrl"){
      setNewPokemon({...newPokemon, sprites: {...newPokemon.sprites, back: e.target.value}})
    
    }else{
      setNewPokemon({...newPokemon, [e.target.name]: e.target.value })
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
         addNewPokemon();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" id="name" value={newPokemon.name} onChange={handleOnChangeForm}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" id="hp" value={newPokemon.hp}onChange={handleOnChangeForm}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            id="frontUrl"
            value={newPokemon.sprites.front}
          onChange={handleOnChangeForm}/>
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            id="backUrl"
            value={newPokemon.sprites.back}
          onChange={handleOnChangeForm}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
