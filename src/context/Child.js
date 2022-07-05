import React, { Component } from "react";
import AuthContext from "./AuthContext";
export class Child extends Component {
  static contextType = AuthContext;
  render() {
    const { username, isAuthentcation, logIn, logOut } = this.context;
    return (
      <div>
        <h1>User :{username}</h1>
        <h1>isAuthentcation :{isAuthentcation ? "Auth" : "non"}</h1>
        <button onClick={logIn}>Log in</button>
        <button onClick={logOut}>Log out</button>
      </div>
    );
  }
}
