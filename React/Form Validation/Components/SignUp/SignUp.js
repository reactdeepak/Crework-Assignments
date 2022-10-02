import React from "react";
import "./signup.css";
import { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(0);
  const [isEmailValid, setIsEmailValid] = useState(0);
  const [pswd, setPswd] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      alert("Signed Up Successfully");
    }
  };
  const validateEmail = (e) => {
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("");
      setIsEmailValid(1);
      console.log(isEmailValid);
      e.target.style.borderColor = "green";
    } else {
      setEmailError("Enter valid Email!");
      e.target.style.borderColor = "red";
    }
  };
  const validatePassword = (e) => {
    let pass = e.target.value;
    let regExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

    if (pass.length < 4) {
      setPasswordError("Password should be at least 4 characters");
      e.target.style.borderColor = "red";
    } else if (pass.length > 12) {
      setPasswordError("Password shouldnt exceed 12 characters");
      e.target.style.borderColor = "red";
    } else if (!regExp.test(pass)) {
      setPasswordError("Password must contain atleast a number ");
      e.target.style.borderColor = "red";
    } else {
      setPasswordError("");
      e.target.style.borderColor = "green";
      setPswd(pass);
    }
  };
  const confirmPassword = (e) => {
    let pwd = e.target.value;

    if (pwd === pswd) {
      setConfirmError("");
      setIsPasswordValid(1);
      e.target.style.borderColor = "green";
    } else {
      setConfirmError("Passwords didn't match !");
      e.target.style.borderColor = "red";
    }
  };
  return (
    <div>
      <div className="container">
        <form id="form" className="form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              placeholder="teamCopyPaste@crework.in"
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
              onBlur={(e) => validatePassword(e)}
            />

            <small>{passwordError}</small>
          </div>
          <div className="form-control">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => confirmPassword(e)}
            />
            <small>{confirmError}</small>
          </div>
          <button onClick={submitHandler}>Submit</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/LogIn">Click here to Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
