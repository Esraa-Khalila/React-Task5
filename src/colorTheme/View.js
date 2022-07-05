
import React, { Component } from "react";
import { ColorProvider, colorConsumer } from "./ColorContext";
import  { Child } from "./Child";
class View extends Component {
  render() {
    return (
      <div>
        <h1>Context</h1>
        <ColorProvider>
          <Child />
        </ColorProvider>
      </div>
    );
}
}


export default View;