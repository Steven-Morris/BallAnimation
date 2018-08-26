import React, { Component } from "react";
import * as d3 from "d3";

class Ball extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      x: props.x,
      y: props.y
    };
  }

  circleRef = React.createRef();

  componentDidUpdate() {
    let el = d3.select(this.circleRef.current);

    el.transition()
      .duration(800)
      .ease(d3.easeBounceOut)
      .attr("cx", this.props.x)
      .attr("cy", this.props.y)
      .on("end", () =>
        this.setState({
          x: this.props.x,
          y: this.props.y
        })
      );
  }

  render() {
    const { x, y } = this.state;

    return <circle r="10" cx={x} cy={10} ref={this.circleRef} />;
  }
}

export default Ball;
