import React, { useState, useEffect } from "react"
import { Tabs, Tab } from "react-bootstrap"

const Coaches = (props) => {

    /////////////////////
    // Constants
    /////////////////////

    const [coaches, setCoaches] = useState([])

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
    }, [])

    function ControlledTabs() {
        const [key, setKey] = useState('home');
        const coachList = coaches.map((item, index) => {
            return (
                <Tab eventKey={item} title={item} key={index}>
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