import React from "react";
import { AuthContext } from "../App";
export const Basic = () => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };
  const [user, setData] = React.useState(initialState);
  const handleInputChange = (event) => {
    setData({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...user,
      isSubmitting: true,
      errorMessage: null,
    });
    fetch("https://api.realworld.io/api/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res.user;
      })
      .then((resJson) => {
        dispatch({
          type: "LOGIN",
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...user,
          isSubmitting: false,
      
        });
      });
  };
  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>

            <label htmlFor="email">
              Email Address
              <input
                type="text"
                value={user.email}
                onChange={handleInputChange}
                name="email"
                id="email"
              />
            </label>

            <label htmlFor="password">
              Password
              <input
                type="password"
                value={user.password}
                onChange={handleInputChange}
                name="password"
                id="password"
              />
            </label>

            {user.errorMessage && (
              <span className="form-error">{user.errorMessage}</span>
            )}

            <button disabled={user.isSubmitting}>
              {user.isSubmitting ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Basic;
