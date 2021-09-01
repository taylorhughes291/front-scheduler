import React, { useState, useEffect } from "react"
import { Tabs, Tab, Modal, Button } from "react-bootstrap"
import Timeslots from "./timeslots"

const Coaches = (props) => {

    /////////////////////
    // Constants
    /////////////////////

    const [coaches, setCoaches] = useState([])
    const [isSet, setIsSet] = useState({
        time: "",
        day_of_week: "",
        coach: ""
    })


    /////////////////////
    // Functions
    /////////////////////

    const reduceCoaches = () => {
        let distinctCoaches = props.availabilities.map((item,index) => {
            return (
                item.name
            )
        })
        distinctCoaches = [...new Set(distinctCoaches)]
        setCoaches(distinctCoaches)
    }



    /////////////////////
    // Render
    /////////////////////

    useEffect(() => {
        reduceCoaches()
    }, [props.availabilities])

    function ControlledTabs() {
        const [key, setKey] = useState('home');
        const coachList = coaches.map((item, index) => {
            return (
                <Tab eventKey={item} title={item} key={index}>
                    <Timeslots 
                        coach={item}
                        timeslots = {props.timeslots}
                        modifyTimeslot={props.modifyTimeslot}
                        setIsSet={setIsSet}
                    />
                </Tab>
            )
        })
      
        return (
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
                {isSet.time !== "" && <h2>Congratulations! Your appointment is set for {isSet.time} {isSet.day_of_week} with {isSet.coach}. Well done!</h2>}
                <h3>If you would like to set up an appointment with a personal coach, please select a coach from the tab above to see a list of available appointment times. Thank you!</h3>
            </Tab>
            {coachList}
          </Tabs>
        );
      }





    return (
        <div>
            <ControlledTabs/>
        </div>
    )
}

export default Coaches