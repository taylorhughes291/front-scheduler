import Coaches from "./components/coaches"
import './App.css';
import {useState, useEffect} from "react"


function App() {
  /////////////////////////////
  // Constants
  /////////////////////////////

  const url = process.env.REACT_APP_DATABASE
  const [availabilities, setAvailabilities] = useState([])
  const [timeslots, setTimeslots] = useState([])

  /////////////////////////////
  // Functions
  /////////////////////////////

  const getDbData = () => {
    //First we'll get the high level coaches data
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

    //Here we will retrieve the granular available timeslots
    const timeslotUrl = url + "/timeslots.json"
    fetch(timeslotUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => (response.json()))
    .then((data) => {
      setTimeslots(data)
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
      <Coaches
        availabilities={availabilities}
        timeslots={timeslots}
      ></Coaches>
    </div>
  );
}

export default App;
