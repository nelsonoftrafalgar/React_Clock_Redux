import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockFourteen = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if(number === '0' || number === '6' || number === '8') {
        styleHour = third;
        styleMinute = third;
    } else if (number === '2') {
        styleHour = forth;
        styleMinute = third;
    } else if (number === '1' || number === '4' || number === '7') {
        styleHour = third;
        styleMinute = first;
    } else {
        styleHour = third;
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
ClockFourteen.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockFourteen;
