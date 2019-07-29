import React, { Component } from "react";
import style from "styled-components";
import RandomButton from "./RandomButton";

const CenterContent = style.section`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
`;

class RandomText extends Component {
  constructor(props) {
    super(props);
    this.names = ["Fajaru", "Fajar", "Dewangga"];
    this.randomNumber = 0;
  }

  state = {
    randomText: "",
    playStatus: false
  };

  startRandomHandler = () => {
    this.setState({ playStatus: true });

    this.interval = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * this.names.length);
      const selectedName = this.names[this.randomNumber];
      this.setState({ randomText: selectedName });
    }, 100);
  };

  stopRandomHandler = () => {
    clearInterval(this.interval);
    this.setState({ playStatus: false });
  };

  componentDidMount() {
    if (this.state.randomText < 1) {
      this.setState({ randomText: "Are You Ready?" });
    }
  }

  render() {
    return (
      <CenterContent>
        <h1>{this.state.randomText}</h1>
        <RandomButton
          playStatus={this.state.playStatus}
          onPlayRandom={this.startRandomHandler}
          onStopRandom={this.stopRandomHandler}
        />
      </CenterContent>
    );
  }
}

export default RandomText;
