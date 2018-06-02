import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const ClockEighteen = (props) => {

    const [first, second, third, forth, fifth] = props.animations;

    return <div className='clock-container'>
      <div className='clock'>
        <div style={third} className='hour'></div>
        <div style={second} className='minute'></div>
        <div className='center'></div>
      </div>
    </div>
}

ClockEighteen.propTypes = {
  animations: PropTypes.array.isRequired,
}

export default ClockEighteen;
