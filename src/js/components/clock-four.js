import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockFour = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if(number === '1') {
        styleHour = fifth;
        styleMinute = fifth;
    } else if (number === '2' || number === '3' || number === '7') {
        styleHour = forth;
        styleMinute = third;
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

ClockFour.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockFour;
