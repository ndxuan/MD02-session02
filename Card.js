import React from "react";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // let txtcolor = { color: "blue" };
    let bgColor = {
      backgroundColor: "grey",
      color: "blue",
    };
    return (
      <div>
        <h1 style={bgColor}>{this.props.textContent}</h1>
      </div>
    );
  }
}
