import React from "react"
import "../../../src/sass/style.css"

class Clock extends React.PureComponent {
  render() {
    const randomDuration = (Math.random() * 6) + 1  
    const minRotateStyle = {animationDuration: `${randomDuration}s`}
    const hrRotateStyle = {animationDuration: `${randomDuration * 12}s`}

    return (
      <div className="clock-container">
        <div className="clock">
          <div style={hrRotateStyle} className="hour"></div>
          <div style={minRotateStyle} className="minute"></div>
          <div className="center"></div>
        </div>
      </div>
    )
  }
}

export default Clock
