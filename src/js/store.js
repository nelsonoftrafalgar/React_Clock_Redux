import {createStore, compose} from "redux"
import timeReducer from "./reducers/timeReducer"

const time = new Date().toLocaleTimeString()

export const initialState = {
  hrFirst: time.charAt(0),
  hrSecond: time.charAt(1),
  minFirst: time.charAt(3),
  minSecond: time.charAt(4),
}

const store = createStore(timeReducer, initialState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
