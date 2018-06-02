import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockSeventeen = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if (number === '1' || number === '4' || number === '7') {
      styleHour = forth;
      styleMinute = third;
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

ClockSeventeen.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockSeventeen;
