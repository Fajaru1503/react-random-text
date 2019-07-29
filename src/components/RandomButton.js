import React, { Component } from "react";
import style from "styled-components";

const Button = style.button`
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin: auto;
  outline: none;
  padding: 12px;
`;

class RandomButton extends Component {
  state = {
    buttonText: "GO!"
  };

  buttonEvent = event => {
    event.preventDefault();
    if (this.state.playStatus) {
      this.props.onStopRandom();
      this.setState({ buttonText: "GO!" });
    } else {
      this.props.onPlayRandom();
      this.setState({ buttonText: "STOP!" });
    }
  };

  render() {
    return <Button onClick={this.buttonEvent}>{this.state.buttonText}</Button>;
  }
}

export default RandomButton;
