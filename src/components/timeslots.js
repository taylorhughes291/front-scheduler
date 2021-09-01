import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"

const Timeslots = (props) => {

    ////////////////////////////////
    // Constants
    ////////////////////////////////

    const [days, setDays] = useState([])
    const timeslots = props.timeslots.filter((item, index) => {
        return (
            item.coach === props.coach
        )
    })


    ////////////////////////////////
    // Functions
    ////////////////////////////////

    const reduceDays = () => {
        let distinctDays = timeslots.map((item, index) => {
            return (
                item.day_of_week
            )
        })
    
        distinctDays = [...new Set(distinctDays)]
        setDays(distinctDays)
    }

    ////////////////////////////////
    // Render
    ////////////////////////////////

    useEffect(() => {
        reduceDays()
    }, [props.timeslots])

    const dayDisplay = days.map((item, index) => {
        let availableTimes = timeslots.filter((timeslot, index2) => {
            return (
                timeslot.day_of_week === item
            )
        })
        availableTimes = availableTimes.map((timeslot, index) => {
            return (
                <Button variant="outline-secondary">{timeslot.time}</Button>
            )
        })
        return (
            <div key={index} className="day-cont">
                <h2>{item}</h2>
                <div className="times-cont">
                    {availableTimes}
                </div>
            </div>
        )
    })

    return (
        <>
            <div>
                {dayDisplay}
            </div>
        </>
    )
}

export default Timeslots