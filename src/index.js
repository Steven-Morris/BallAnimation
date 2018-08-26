import React from "react";
import { render } from "react-dom";
import Ball from "./Ball";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    ballLeft: true,
    ballDown: false
  };
  ballJump = () =>
    this.setState({
      ballLeft: !this.state.ballLeft,
      ballDown: !this.state.ballDown
    });

  render() {
    const { ballLeft, ballDown } = this.state;
    return (
      <div style={styles}>
        <h1>D3 transitions in React 16.3 {"\u2728"}</h1>
        <p>Click the ball 👇</p>
        <svg style={{ width: "300", height: "300px" }} onClick={this.ballJump}>
          <Ball x={ballLeft ? 15 : 250} y={ballDown ? 250 : 15} />
        </svg>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
