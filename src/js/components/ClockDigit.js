import React from "react"
import "../../../src/sass/style.css"

const ClockDigit = ({number, setDigit}) => {
  const styleHour = setDigit(number).styleHour
  const styleMinute = setDigit(number).styleMinute

    return (
      <div className="clock-container">
        <div className="clock">
          <div style={styleHour} className="hour"></div>
          <div style={styleMinute} className="minute"></div>
          <div className="center"></div>
        </div>
      </div>
    )
}

export default ClockDigit
