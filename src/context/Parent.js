
import React, { Component } from "react";
import AuthContext, { AuthProvider, AuthConsumer } from "./AuthContext";
import  { Child } from "./Child";
class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Context</h1>
      <AuthProvider>  
        <Child />
      </AuthProvider>
   </div> 
  )
}
}


export default Parent;