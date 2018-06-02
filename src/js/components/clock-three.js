import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockThree = (props) => {

    const [first, second, third, forth, fifth] = props.animations;

    return <div className='clock-container'>
      <div className='clock'>
        <div style={second} className='hour'></div>
        <div style={first} className='minute'></div>
        <div className='center'></div>
      </div>
    </div>
}

ClockThree.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockThree;
