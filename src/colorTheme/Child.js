import React, { Component } from "react";
import ColorContext from "./ColorContext";

export class Child extends Component {
  static contextType = ColorContext;
  render() {
     const { theme, changen } = this.context;
    return (
      <div>
        <div >{theme}</div>
        <button onClick={changen}>change</button>
      </div>
    );
  }
}
