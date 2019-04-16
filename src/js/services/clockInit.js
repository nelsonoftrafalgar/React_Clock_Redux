import React from "react"
import Clock from "./../components/Clock"

export const clockInit = clocks => {
  const arr = []
  for (let i = 0; i < clocks; i++) {
    arr.push(<Clock key={i} />)
  }
  
  return arr
}