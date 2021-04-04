import React, {useState} from "react"
import axios from "axios"

//Styling
import './App.css';
import "./Styles/Button.css"
import "./Styles/Input.css"

//Components
import Button from "./Components/Button"
import Input from "./Components/Input"

const PokeCard = (poke) => { 
  console.log(poke)
  console.log(poke.poke.name)
  return (
    <div>
        <article>
          <h3>{poke.poke.name}</h3>
          <p>{poke.poke.types.map((element, idx) => {
            return <span key={idx}>{element.type.name} </span>
          })}</p>

          <img src={poke.poke.sprites["front_default"]} alt={poke.poke.name} />

          <ul>
            {poke.poke.abilities.map((element, idx) => {
              return <li key={idx}>{element.ability.name}</li>
              })}
          </ul>
        </article> 
    </div>
  )
}

function App() {
  const [pokemon, setPokemon] = useState(false);

  async function getData(){
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${document.querySelector("input").value.toLowerCase()}/`)
      setPokemon(response.data)
    }catch(err){
      setPokemon(false)
      console.error(err) 
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2> Gotta catch em all!</h2>
      </header>
      <main className="App-main">
        <div className="control">
          <Input className="input-text"placeholder="type your search item here"></Input>
          <Button className="btn" id="getData" handleClick={getData} text="get a Pokemon"></Button>
        </div>
         { pokemon ? <PokeCard poke={pokemon} /> : "type and click to get pokemon info..." }
      </main>
    </div>
  );
}

export default App;


/* pokecard original

<div>
          {pokemon ? 
            <article>
              <h3>{pokemon.name}</h3>
              <p>{pokemon.types.map((element, idx) => {
                return <span key={idx}>{element.type.name} </span>
              })}</p>

              <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />

              <ul>
                {pokemon.abilities.map((element, idx) => {
                  return <li key={idx}>{element.ability.name}</li>
                  })}
              </ul>
            </article> :
            "type and click to get pokemon info..."
          }
        </div>

*/


// Co-authored-by: Marcus Pereira <marcuxyz@users.noreply.github.com>