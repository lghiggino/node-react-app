import React, {useState} from "react"
import axios from "axios"

//Styling
import './App.css';
import "./Styles/Button.css"
import "./Styles/Input.css"

//Components
import Button from "./Components/Button"
import Input from "./Components/Input"

const PokeCard = (props) => { 
  return (
    <div>
        <article>
          <h3>{props.props.name}</h3>
          <p>{props.props.types.length > 1 ? 
                props.props.types.map((element, idx) => {
                  return <span key={idx}>{element.type.name} </span>
                }) 
                : props.props.types[0].type.name}
          </p>
          
          <img src={props.props.sprites["front_default"]} alt={props.props.name} />

          <ul>
            {props.props.abilities.map((element, idx) => {
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

          { pokemon ? <PokeCard props={pokemon} /> : "type and click to get pokemon info..." }

      </main>
    </div>
  );
}

export default App;


/* pokecard original - legacy code ;)

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

