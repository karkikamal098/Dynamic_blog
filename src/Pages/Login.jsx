import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="register">
      <div className="register_div">
        <h2>Login</h2>
        <form className="Login">
          <p className="form_error">This is the error message</p>
          <div className="form_input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInput}
              autoFocus
            />
            <input
              type="password"
              placeholder="Password"
              name="password1"
              value={userData.password}
              onChange={changeInput}
              autoFocus
            />

            <button type="Login" className="btn_category">
              Register
            </button>
          </div>
          <small>Don't have account?</small>

          <Link to="/register">Register</Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
