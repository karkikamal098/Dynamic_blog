import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../context/userContext.js";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${process.env.React_App_BASE_URL}/users/login`,
        userData
      );
      const user = await response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <section className="register">
      <div className="register_div">
        <h2>Login</h2>
        <form className="Login" onSubmit={loginUser}>
          {error && <p className="form_error">{error}</p>}
          <div className="form_input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
              autoFocus
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
            />

            <button type="submit" className="btn_category">
              Login
            </button>
          </div>
        </form>
        <small>Don't have account?</small>

        <Link to="/register">Register</Link>
      </div>
    </section>
  );
};

export default Login;
