import React from 'react';
import '../../../src/sass/style.css';
import ClockOne from './clock-one';
import ClockTwo from './clock-two';
import ClockThree from './clock-three';
import ClockFour from './clock-four';
import ClockFive from './clock-five';
import ClockSix from './clock-six';
import ClockSeven from './clock-seven';
import ClockEight from './clock-eight';
import ClockNine from './clock-nine';
import ClockTen from './clock-ten';
import ClockEleven from './clock-eleven';
import ClockTwelve from './clock-twelve';
import ClockThirteen from './clock-thirteen';
import ClockFourteen from './clock-fourteen';
import ClockFifteen from './clock-fifteen';
import ClockSixteen from './clock-sixteen';
import ClockSeventeen from './clock-seventeen';
import ClockEighteen from './clock-eighteen';
import PropTypes from 'prop-types';

const Digit = (props) => {

  const animations = [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(90deg)'},
    {transform: 'rotate(180deg)'},
    {transform: 'rotate(270deg)'},
    {transform: 'rotate(315deg)'},
    props.number
  ]

  return <div className='digit-container'>
    <ClockOne animations={animations} />
    <ClockTwo animations={animations} />
    <ClockThree animations={animations} />
    <ClockFour animations={animations} />
    <ClockFive animations={animations} />
    <ClockSix animations={animations} />
    <ClockSeven animations={animations} />
    <ClockEight animations={animations} />
    <ClockNine animations={animations} />
    <ClockTen animations={animations} />
    <ClockEleven animations={animations} />
    <ClockTwelve animations={animations} />
    <ClockThirteen animations={animations} />
    <ClockFourteen animations={animations} />
    <ClockFifteen animations={animations} />
    <ClockSixteen animations={animations} />
    <ClockSeventeen animations={animations} />
    <ClockEighteen animations={animations} />
  </div>
}

Digit.propTypes = {
  number: PropTypes.string.isRequired,
}

export default Digit;
