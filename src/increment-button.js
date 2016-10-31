import React, { Component } from 'react';

class IncrementButton extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return <button onClick={ this.handleClick.bind(this) }>
            You've Pressed Me { this.state.count } Times
          </button>
  }

}
export default IncrementButton;
