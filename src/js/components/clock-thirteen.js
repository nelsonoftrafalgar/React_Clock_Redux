import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockThirteen = (props) => {

    const [first, second, third, forth, fifth, number] = props.animations;
    let styleHour = {};
    let styleMinute = {};
    if(number === '1' || number === '4' || number === '7') {
        styleHour = fifth;
        styleMinute = fifth;
    } else if (number === '3' || number === '5' || number === '9') {
        styleHour = forth;
        styleMinute = first;
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

ClockThirteen.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockThirteen;
