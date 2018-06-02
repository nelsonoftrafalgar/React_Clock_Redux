import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockTwo = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if (number === '1') {
      styleHour = forth;
      styleMinute = first;
    } else if (number === '4') {
      styleHour = second;
      styleMinute = first;
    } else {
      styleHour = forth;
      styleMinute = second;
    }

    return <div className='clock-container'>
      <div className='clock'>
        <div style={styleHour} className='hour'></div>
        <div style={styleMinute} className='minute'></div>
        <div className='center'></div>
      </div>
    </div>
}

ClockTwo.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockTwo;
