import { useState, useEffect } from "react";
import axios from "axios";
function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const apiUrl = "https://api.realworld.io/api/users";
  const Registration = (e) => {
    e.preventDefault();

    const data1 = {
        username: user.username,
        email: user.email,
        password: user.password,
    };
    axios.post(apiUrl, data1).then((result) => {
      console.log(result.user);
      if (result.user.Status == "Invalid") alert("Invalid User");
      else alert("success User");
    });
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Form</h1>

      <form onSubmit={Registration} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={onChange}
            value={user.username}
          />
          <br />
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={onChange}
            value={user.email}
          />
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={onChange}
            value={user.password}
          />
          <br />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
export default Register;
