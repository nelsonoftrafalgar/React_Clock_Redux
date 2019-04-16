import React from "react"
import "./../../../src/sass/style.css"
import {clockInit} from "./../services/clockInit"

const BackgroundClock = ({numberOfClocks, orientation}) => {
  const clocks = clockInit(numberOfClocks)

  return (
    <div className={`${orientation}-container`}>
      {clocks}
    </div>
  )
}

export default BackgroundClock
