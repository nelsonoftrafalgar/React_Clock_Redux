import {initialState} from "./../store"

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TIME':
        state = {
          ...state,
          hrFirst: action.time.charAt(0),
          hrSecond: action.time.charAt(1),
          minFirst: action.time.charAt(3),
          minSecond: action.time.charAt(4),
        }   
    default:
      return state
  }
}
export default timeReducer
