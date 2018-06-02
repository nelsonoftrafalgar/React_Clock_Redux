const time = new Date().toLocaleTimeString();

const timeReducer = (state = {
  hrFirst: time.charAt(0),
  hrSecond: time.charAt(1),
  minFirst: time.charAt(3),
  minSecond: time.charAt(4),
}, action) => {
  switch (action.type) {
    case 'GET_TIME':
        state = {
          ...state,
          hrFirst: action.time.charAt(0),
          hrSecond: action.time.charAt(1),
          minFirst: action.time.charAt(3),
          minSecond: action.time.charAt(4),
        };  
    default:
      return state;
  }
}
export default timeReducer;
