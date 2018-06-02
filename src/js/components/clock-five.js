import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockFive = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if(number === '5' || number === '6') {
        styleHour = forth;
        styleMinute = first;
    } else if (number === '4' || number === '1') {
        styleHour = third;
        styleMinute = first;
    } else if (number === '0' || number === '8' || number === '9') {
        styleHour = first;
        styleMinute = first;
    } else {
        styleHour = second;
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

ClockFive.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockFive;
