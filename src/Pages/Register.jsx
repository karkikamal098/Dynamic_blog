import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const changeInput = (e) => {
    setUserData((prevState) => {
      return {
        ...userData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.React_App_BASE_URL}/users/register`,
        userData
      );
      const newUser = await response.data;
      console.log(newUser);
      if (!newUser) {
        setError("could not register, please try again");
      }
      navigate("/register");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(
          err.response.data.message || "Registration failed. Please try again."
        );
      } else {
        setError("An unknown error occurred. Please try again.");
      }
    }
  };


  return (
    <section className="register">
      <h2>Sign Up</h2>
      <form className="register_form" onSubmit={registerUser}>
        
        {error && <p className="form_error">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={changeInput}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={changeInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={changeInput}
        />
        <input
          type="password"
          placeholder="confirm Password"
          name="password2"
          value={userData.password2}
          onChange={changeInput}
        />
        <button type="submit" className="btn_category">
          Register
        </button>

        {/* <small>Already have an account?</small> */}

        <Link to="/login">Login</Link>
      </form>
    </section>
  );
};

export default Register;
