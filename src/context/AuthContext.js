import React, { Component } from 'react'
const AuthContext = React.createContext()
 export const AuthConsumer = AuthContext.Consumer;
export class AuthProvider extends Component {
      state = {
    username: "",
    isAuthentcation: false,
  };
 
  logIn = () => {
    this.setState({ username: "Esraa", isAuthentcation: true });
  };
  logOut = () => {
    this.setState({ username: "", isAuthentcation: false });
    };
    render() {
        const { username, isAuthentcation } = this.state
        const {logIn,logOut}=this
        return (
            <AuthContext.Provider value={{ username, isAuthentcation, logIn,logOut }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthContext;