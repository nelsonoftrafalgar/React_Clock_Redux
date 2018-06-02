import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockSixteen = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if (number === '1' || number === '4' || number === '7') {
      styleHour = fifth;
      styleMinute = fifth;
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

ClockSixteen.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockSixteen;
