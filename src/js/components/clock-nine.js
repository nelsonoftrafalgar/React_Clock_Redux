import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockNine = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if (number === '5' || number === '6') {
      styleHour = second;
      styleMinute = first;
    } else {
      styleHour = third;
      styleMinute = first;
    }
    return <div className='clock-container'>
      <div className='clock'>
        <div style={styleHour} className='hour'></div>
        <div style={styleMinute} className='minute'></div>
        <div className='center'></div>
      </div>
    </div>
}

ClockNine.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockNine;
