// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState({
      count: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    let isOddValue
    if (count % 2 !== 0) {
      isOddValue = <p>Count is Odd</p>
    } else {
      isOddValue = <p>Count is Even</p>
    }
    return (
      <div className="container">
        <div className="cart">
          <h1 className="head">
            Count <span>{count}</span>
          </h1>
          {isOddValue}
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase by random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
