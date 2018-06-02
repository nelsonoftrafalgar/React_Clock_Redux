import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockEight = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if(number === '0' || number === '1' || number === '7') {
        styleHour = third;
        styleMinute = first;
    } else if (number === '2' || number === '3') {
        styleHour = third;
        styleMinute = second;
    } else if (number === '8' || number === '9') {
        styleHour = third;
        styleMinute = third;
    } else {
        styleHour = forth;
        styleMinute = third;
    }

    return <div className='clock-container'>
      <div className='clock'>
        <div style={styleHour} className='hour'></div>
        <div style={styleMinute} className='minute'></div>
        <div className='center'></div>
      </div>
    </div>
}

ClockEight.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockEight;
