import React, {useState} from "react"
import axios from "axios"

//Styling
import logo from './logo.svg';
import './App.css';
import "./Styles/Button.css"
import "./Styles/Input.css"

//Components
import Button from "./Components/Button"

function App() {
  const [data, setData] = useState([]);
  
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
          <Button className="btn" id="apiOne" handleClick={fetchApiOne} text="Call apiOne"></Button>
          <Button className="btn" id="apiTwo" handleClick={fetchApiTwo} text="Call apiTwo"></Button>
        </div>
        <div>
          <p>
            {data.message}
          </p>
          <p>
            <span>{data.name}</span> <span>{data.surname}</span>
          </p>
          <p>
            {data.dob}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
