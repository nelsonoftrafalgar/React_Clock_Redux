import React from 'react';
import '../../../src/sass/style.css';
import PropTypes from 'prop-types';

const Vertical = (props) => {
    return <div className='vertical-container'>
      {props.func}
    </div>
}

Vertical.propTypes = {
  func: PropTypes.array.isRequired,
}

export default Vertical;
