import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios"

const Button = ({handleClick, id, text}) => {
  return (
    <button onClick={handleClick} id={id}>{text}</button>
  )
}

function App() {
  const [data, setData] = useState([]);

  // useEffect( () => {
  //   async function busca(){
  //     const response = await axios.get("http://localhost:3001/apiTwo")
  //     console.log(response.data)
  //     setData(response.data)
  //   }
  //   busca()
  // }, []);

  async function getData(route){
    console.log("get data from", route)
    const response = await axios.get(`http://localhost:3001/${route}`)
    console.log(response.data)
    setData(response.data)
  }

  async function fetchApiOne(){
    console.log("clicked to fetch on api 1")
    const response = await axios.get("http://localhost:3001/apiOne")
    console.log(response.data)
    setData(response.data)
  }

  async function fetchApiTwo(){
    console.log("clicked to fetch on api 2")
    const response = await axios.get("http://localhost:3001/apiTwo")
    console.log(response.data)
    setData(response.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="control">
          <Button id="apiOne" handleClick={fetchApiOne} text="apiOne"></Button>
          <Button id="apiTwo" handleClick={fetchApiTwo} text="apiTwo"></Button>
          <Button id="getData" handleClick={getData} text="getDataX"></Button>
          {/* não posso passar o handleClick com uma function call, temos que passar como variável getData(X) não pode */}
        </div>
        <p>
          {data.message}
        </p>
        <p>
          <span>{data.name}</span> <span>{data.surname}</span>
        </p>
        <p>
          {data.dob}
        </p>
        
      </header>
    </div>
  );
}

export default App;


// Co-authored-by: Marcus Pereira <marcuxyz@users.noreply.github.com>