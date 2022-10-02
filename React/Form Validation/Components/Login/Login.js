import React from "react";
import "./login.css";
import validator from "validator";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState("");
  const [cred, setCred] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    setTimeout(() => {
      navigate("/Landing", { state: { key: user } });
    }, 5000);
    if (user === "copypaste@crework.in" && cred === "Anand@234") {
      alert("Logged In");
    } else {
      alert("InKorrect Credential");
    }
  };

  const validateEmail = (e) => {
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("");
      setUser(email);
      e.target.style.borderColor = "green";
    } else {
      setEmailError("Enter valid Email!");
      e.target.style.borderColor = "red";
    }
  };
  const validatePassword = (e) => {
    let pass = e.target.value;
    if (pass.length < 4) {
      setPasswordError("Password should be at least 4 characters");
      e.target.style.borderColor = "red";
    } else if (pass.length > 12) {
      setPasswordError("Password shouldnt exceed 12 characters");
      e.target.style.borderColor = "red";
    } else {
      setPasswordError("");
      setCred(pass);
      e.target.style.borderColor = "green";
    }
  };
  return (
    <div>
      {" "}
      <div className="container">
        <div className="alert">
          <p>Logged In successfully!</p>
        </div>
        <div className="header">
          <h2>Log In</h2>
        </div>
        <form id="form" className="form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              id="email"
              onChange={(e) => validateEmail(e)}
            />

            <small>{emailError}</small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => validatePassword(e)}
            />

            <small>{passwordError}</small>
          </div>
          <button onClick={submitHandler}>Log In</button>
        </form>
        <p>Dont have an account?</p>
        <Link to="/">Click here to Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
