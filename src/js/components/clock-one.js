import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockOne = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if (number === '1') {
      styleHour = fifth;
      styleMinute = fifth;
    } else {
      styleHour = forth;
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

ClockOne.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockOne;
