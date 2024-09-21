import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const navigate = useNavigate;

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost/5000//api/users/register", {})
    } catch (err) {
      setError(setError(err.response.data.message));
    }
  };

  return (
    <section className="register">
      <div className="register_div">
        <h2>Sign Up</h2>
        <form className="register_form" onSubmit={registerUser}>
          {error && <p className="form_error">{error}</p>}
          <div className="form_input">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={changeInput}
              autoFocus
            />
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
              name="password"
              value={userData.password}
              onChange={changeInput}
              autoFocus
            />
            <input
              type="password"
              placeholder="confirm Password"
              name="password2"
              value={userData.password2}
              onChange={changeInput}
              autoFocus
            />
            <button type="submit" className="btn_category">
              Register
            </button>
          </div>
          <small>Already have an account?</small>

          <Link to="/login">Login</Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
