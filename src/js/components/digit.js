import React from "react"
import "../../../src/sass/style.css"
import ClockDigit from "./ClockDigit"
import Digits from "../services/digitsService"

const Digit = ({number}) => {
  const digits = new Digits()

  const digitsArray = Object.getOwnPropertyNames(Digits.prototype)
    .slice(1)
    .map(digit => <ClockDigit key={digit} number={number} setDigit={digits[digit]}/>)

  return (
    <div className="digit-container">
      {digitsArray}
    </div>
  ) 
}

export default Digit
