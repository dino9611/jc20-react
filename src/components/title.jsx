import React, { Component } from "react";

// class component
class Title extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>TesX</h1>
      </div>
    );
  }
}
export default Title;
