import React from "react"
import {connect} from "react-redux"
import Digit from "../components/Digit"
import BackgroundClock from "../components/BackgroundClock"
import "../../../src/sass/style.css"
import {getTime} from "../actions/timeActions"

class App extends React.Component {

  componentWillMount() {
    this.timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString()
      this.props.getTime(time)
    }, 1000)
  }

  componentWillUnmount() {
        clearTimeout(this.timerId)
  }

  render() {
    const {hrFirst, hrSecond, minFirst, minSecond} = this.props

    return <div className="all-clocks-container">
      <BackgroundClock numberOfClocks={15} orientation={"horizontal"}/>
      <BackgroundClock numberOfClocks={6} orientation={"vertical"}/>
      <Digit number={hrFirst} />
      <Digit number={hrSecond} />
      <BackgroundClock numberOfClocks={6} orientation={"vertical"}/>
      <Digit number={minFirst} />
      <Digit number={minSecond} />
      <BackgroundClock numberOfClocks={6} orientation={"vertical"}/>
      <BackgroundClock numberOfClocks={15} orientation={"horizontal"}/>
      <BackgroundClock numberOfClocks={15} orientation={"horizontal"}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
