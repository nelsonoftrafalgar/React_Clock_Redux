import {animations} from "./animations"

let styleHour
let styleMinute

class Digits {
  setOne(number) {
    if (number === '1') {
      styleHour = animations[4]
      styleMinute = animations[4]
    } else {
      styleHour = animations[3]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setTwo(number) {
    if (number === '1') {
      styleHour = animations[3]
      styleMinute = animations[0]
    } else if (number === '4') {
      styleHour = animations[1]
      styleMinute = animations[0]
    } else {
      styleHour = animations[3]
      styleMinute = animations[1]
    }
    return {styleHour, styleMinute}
  }

  setThree(number) {
    if (number) {
      styleHour = animations[0]
      styleMinute = animations[1]
    }
    return {styleHour, styleMinute}
  }

  setFour(number) {
    if (number === '1') {
      styleHour = animations[4]
      styleMinute = animations[4]
    } else if (number === '2' || number === '3' || number === '7') {
      styleHour = animations[3]
      styleMinute = animations[2]
    } else {
      styleHour = animations[2]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setFive(number) {
    if (number === '5' || number === '6') {
      styleHour = animations[3]
      styleMinute = animations[0]
    } else if (number === '4' || number === '1') {
      styleHour = animations[2]
      styleMinute = animations[0]
    } else if (number === '0' || number === '8' || number === '9') {
      styleHour = animations[0]
      styleMinute = animations[0]
    } else {
      styleHour = animations[1]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setSix(number) {
    if (number === '5' || number === '6') {
      styleHour = animations[2]
      styleMinute = animations[1]
    } else {
      styleHour = animations[2]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setSeven(number) {
    if (number === '1' || number === '7') {
      styleHour = animations[4]
      styleMinute = animations[4]
    } else if (number === '2' || number === '3') {
      styleHour = animations[3]
      styleMinute = animations[0]
    } else {
      styleHour = animations[2]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setEight(number) {
    if (number === '0' || number === '1' || number === '7') {
      styleHour = animations[2]
      styleMinute = animations[0]
    } else if (number === '2' || number === '3') {
      styleHour = animations[2]
      styleMinute = animations[1]
    } else if (number === '8' || number === '9') {
      styleHour = animations[2]
      styleMinute = animations[2]
    } else {
      styleHour = animations[3]
      styleMinute = animations[2]
    }
    return {styleHour, styleMinute}
  }

  setNine(number) {
    if (number === '5' || number === '6') {
      styleHour = animations[1]
      styleMinute = animations[0]
    } else {
      styleHour = animations[2]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setTen(number) {
    if (number === '1' || number === '7') {
      styleHour = animations[4]
      styleMinute = animations[4]
    } else if (number === '0' || number === '2' || number === '6' || number === '8') {
      styleHour = animations[2]
      styleMinute = animations[0]
    } else {
      styleHour = animations[3]
      styleMinute = animations[2]
    }
    return {styleHour, styleMinute}
  }

  setEleven(number) {
    if (number === '2') {
      styleHour = animations[3]
      styleMinute = animations[0]
    } else if (number === '6' || number === '8') {
      styleHour = animations[0]
      styleMinute = animations[0]
    } else if (number === '0' || number === '1' || number === '7') {
      styleHour = animations[2]
      styleMinute = animations[0];
    } else {
      styleHour = animations[1]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setTwelve(number) {
    if (number === '2') {
      styleHour = animations[2]
      styleMinute = animations[1]
    } else {
      styleHour = animations[2]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }
  
  setThirteen(number) {
    if (number === '1' || number === '4' || number === '7') {
      styleHour = animations[4]
      styleMinute = animations[4]
    } else if (number === '3' || number === '5' || number === '9') {
      styleHour = animations[3]
      styleMinute = animations[0]
    } else {
      styleHour = animations[2]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setFourteen(number) {
    if (number === '0' || number === '6' || number === '8') {
      styleHour = animations[2]
      styleMinute = animations[2]
    } else if (number === '2') {
      styleHour = animations[3]
      styleMinute = animations[2]
    } else if (number === '1' || number === '4' || number === '7') {
      styleHour = animations[2]
      styleMinute = animations[0]
    } else {
      styleHour = animations[2]
      styleMinute = animations[1]
    }
    return {styleHour, styleMinute}
  }

  setFifteen(number) {
    if (number === '2') {
      styleHour = animations[1]
      styleMinute = animations[0]
    } else {
      styleHour = animations[2]
      styleMinute = animations[0]
    }
    return {styleHour, styleMinute}
  }

  setSixteen(number) {
    if (number === '1' || number === '4' || number === '7') {
      styleHour = animations[4]
      styleMinute = animations[4]
    } else {
      styleHour = animations[3]
      styleMinute = animations[2]
    }
    return {styleHour, styleMinute}
  }

  setSeventeen(number) {
    if (number === '1' || number === '4' || number === '7') {
      styleHour = animations[3]
      styleMinute = animations[2]
    } else {
      styleHour = animations[3]
      styleMinute = animations[1]
    }
    return {styleHour, styleMinute}
  }

  setEighteen(number) {
    if (number) {
      styleHour = animations[2]
      styleMinute = animations[1]
    }
    return {styleHour, styleMinute}
  }
}

export default Digits