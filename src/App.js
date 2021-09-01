import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {
  /////////////////////////////
  // Constants
  /////////////////////////////

  const url = process.env.REACT_APP_DATABASE
  const [availabilities, setAvailabilities] = useState([])

  /////////////////////////////
  // Functions
  /////////////////////////////

  const getDbData = () => {
    const getUrl = url + "/availabilities.json"
    fetch(getUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => (response.json()))
    .then((data) => {
      setAvailabilities(data)
    })
  }

  /////////////////////////////
  // Render
  /////////////////////////////

  useEffect(() => {
    getDbData()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
