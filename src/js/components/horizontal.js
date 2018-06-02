import React from 'react';
import './../../../src/sass/style.css';
import PropTypes from 'prop-types';

const Horizontal = (props) => {
    return <div className='horizontal-container'>
      {props.func}
    </div>
}

Horizontal.propTypes = {
  func: PropTypes.array.isRequired,
}

export default Horizontal;
