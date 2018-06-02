import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const Clock = (props) => {

    const rotate = {transform: `rotate(${props.rotate}deg)`};

    return <div className='clock-container'>
      <div className='clock'>
        <div style={rotate} className='hour'></div>
        <div style={rotate} className='minute'></div>
        <div className='center'></div>
      </div>
    </div>
}

Clock.propTypes = {
  rotate: PropTypes.number.isRequired,
}

export default Clock;
