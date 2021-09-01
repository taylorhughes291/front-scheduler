import React, {useState, useEffect} from "react"
import {Button, Modal} from "react-bootstrap"

const Timeslots = (props) => {

    ////////////////////////////////
    // Constants
    ////////////////////////////////

    const [days, setDays] = useState([])
    const timeslots = props.timeslots.filter((item, index) => {
        return (
            item.coach === props.coach && item.available === true
        )
    })
    const [timeSelected, setTimeSelected] = useState({
        id: "",
        time: "",
        day_of_week: ""
      })

    const [show, setShow] = useState(false);


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

    function ConfirmationModal() {
        
      
        const handleClose = () => setShow(false);
        
      
        return (
          <>      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Your Appointment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  Please enter your information below to confirm your {timeSelected.time} {timeSelected.day_of_week} appointment with {props.coach}.
                  <form>
                    <p>Name:</p>
                    <input type="text"></input>
                    <p>Phone Number:</p>
                    <input type="text"></input>
                  </form>
                </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button 
                    variant="primary" 
                    onClick={() => {
                        handleClose()
                        props.setIsSet({time: timeSelected.time, day_of_week: timeSelected.day_of_week, coach: props.coach})
                        props.modifyTimeslot(timeSelected.id, {available: false})
                    }}

                >
                  Confirm Appointment
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

    ////////////////////////////////
    // Render
    ////////////////////////////////

    useEffect(() => {
        reduceDays()
    }, [])

    const dayDisplay = days.map((item, index) => {
        let availableTimes = timeslots.filter((timeslot, index2) => {
            return (
                timeslot.day_of_week === item
            )
        })
        availableTimes = availableTimes.map((timeslot, index) => {
            return (
                <Button 
                    key={index} 
                    variant="outline-secondary"
                    className="timeslot"
                    onClick={() => {
                        setTimeSelected({id: timeslot.id, time: timeslot.time, day_of_week: timeslot.day_of_week})
                        setShow(true)
                    }}
                >
                    {timeslot.time}
                </Button>
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
            <ConfirmationModal />
        </>
    )
}

export default Timeslots