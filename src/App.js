import logo from './logo.svg';
import './App.css';
import Parent from "./context/Parent.js";
import View from "./colorTheme/View.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Nav from "./login/Nav";
import Basic from "./login/Basic";
import Register from "./login/Register";
import Home from "./login/Home";
import React from "react";

export const AuthContext = React.createContext(); // added this
const initialState = {
  isAuthenticated: false,
  user: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
function App() {
   const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
    <Register />
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Nav />
      <div className="App">{!state.isAuthenticated ? <Basic /> : <Home /> }</div>
    </AuthContext.Provider></>
  );
}
export default App;
