import React from 'react';
import Digit from './../components/digit';
import Vertical from './../components/vertical';
import Horizontal from './../components/horizontal';
import '../../../src/sass/style.css';
import Clock from './../components/clock';
import {connect} from 'react-redux';
import {getTime} from './../actions/timeActions';
import PropTypes from 'prop-types';

class App extends React.Component {

  componentWillMount() {
    this.timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      this.props.getTime(time);
    }, 1000)
  }

  componentWillUnmount() {
        clearTimeout(this.timerId);
  }

  clockInit = (a,b,c) => {
    let arr = [];
    for(let i = 0; i < c; i++) {
      arr.push(
        <Clock key={i} rotate={a + (i * b)} />
      );
    };
    return arr;
  }

  clockInitReverse = (a,b,c) => {
    let arr = [];
    for(let i = 0; i < c; i++) {
      arr.push(
        <Clock key={i} rotate={a - (i * b)} />
      );
    };
    return arr;
  }

  render() {
    return <div className='all-clocks-container'>
      <Horizontal func={this.clockInit(-30, 7, 15)} />
      <Vertical func={this.clockInitReverse(-45, 17, 6)} />
      <Digit number={this.props.hrFirst} />
      <Digit number={this.props.hrSecond} />
      <Vertical func={this.clockInit(45, 17, 6)} />
      <Digit number={this.props.minFirst} />
      <Digit number={this.props.minSecond} />
      <Vertical func={this.clockInit(65, 9, 6)} />
      <Horizontal func={this.clockInitReverse(220, 8, 15)} />
      <Horizontal func={this.clockInitReverse(210, 6, 15)} />
    </div>
  }
}

const mapStateToProps = state => ({
    hrFirst: state.hrFirst,
    hrSecond: state.hrSecond,
    minFirst: state.minFirst,
    minSecond: state.minSecond,
})

const mapDispatchToProps = dispatch => ({
      getTime: (time) => dispatch(getTime(time))
})

App.propTypes = {
  hrFirst: PropTypes.string.isRequired,
  hrSecond: PropTypes.string.isRequired,
  minFirst: PropTypes.string.isRequired,
  minSecond: PropTypes.string.isRequired,
  getTime: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
