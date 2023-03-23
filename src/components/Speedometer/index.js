import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () =>
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {
          speed: prevState.speed + 10,
        }
      }
      return {
        speed: prevState.speed,
      }
    })

  onBrake = () =>
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {
          speed: prevState.speed - 10,
        }
      }
      return {
        speed: prevState.speed,
      }
    })

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="imgurl"
          alt="speedometer"
        />
        <h1 className="para">{`Speed is ${speed}mph`}</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button accelerate"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="button brake" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
