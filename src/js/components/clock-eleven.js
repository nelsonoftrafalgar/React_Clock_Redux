import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockEleven = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if(number === '2') {
        styleHour = forth;
        styleMinute = first;
    } else if (number === '6' || number === '8') {
        styleHour = first;
        styleMinute = first;
    } else if (number === '0' || number === '1' || number === '7') {
        styleHour = third;
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

ClockEleven.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockEleven;
