import React from "react";
import { useState, useContext } from "react";
import Urls from "../../../Urls";
import { AuthContext } from "../../../contexts/AuthContext";

import axious from "axios";
import "./SignUp.scss";

const SignUp = ({ closeFunc }) => {
  const [error, setError] = useState(null);


  // если регистрация прошла успешно
  const [isSuccess, setIsSuccess] = useState(true);

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    const terms = e.target.elements.terms.checked;
    const privacy = e.target.elements.privacy.checked;
    const remember = e.target.elements.remember.checked;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if(!firstName || !lastName){
        setError("First name and last name are required");
        return;
    }

    if(!validateNames(firstName, lastName)){
        setError("First name and last name must contain only letters");
        return;
    }

    if (!terms || !privacy) {
      setError("You must agree to the terms and privacy policy");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be 8-20 characters long and contain at least one numeric digit, one uppercase and one lowercase letter"
      );
    }

    setError(null);
    sendSignUpRequest(email, password, firstName, lastName, remember);

    console.log("Form submitted", { email, password });
  };

  function sendSignUpRequest(email, password, firstName, lastName, remember) {
    axious
      .post(`${Urls.API_BASE_URL_LOCAL}/Authentication/register`, {
        email,
        password,
        firstName,
        lastName,
      })
      .then((response) => {
        console.log(response);
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error(error);
        setError("API error. Please try again later.");
      });
  }

  function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return re.test(password);
  }

  function validateNames(firstName, lastName){
    const re = /^[a-zA-Z]+$/;
    return re.test(firstName) && re.test(lastName);
  }

  return (
    <>
      {error && <div className="error">{error}</div>}
      {isSuccess && (
        <div className="success-container">
          <h2 className="success-header">Check your email!</h2>
          <p className="success-text">We've sent you a link to verify your account</p>
        </div>
      )}
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" required />
        <label htmlFor="confirmPassword">Repeat Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Repeat Password"
        />
        <div className='first-last-name'>

          <div className='first-name'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="First Name" required/>
          </div>
          <div className='last-name'>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" required/>
          </div>

        </div>

        <div className="form-checkbox">
          <input type="checkbox" id="remember"/>
          <label htmlFor="remember">Remember me?</label>
        </div>
        <div className="form-checkbox">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <a href="/">terms of service</a>
          </label>
        </div>
        <div className="form-checkbox">
          <input type="checkbox" id="privacy" required />
          <label htmlFor="privacy">
            I agree to the <a href="/">privacy policy</a>
          </label>
        </div>

        {/* нужно еще эту кнопку разукрасить как в дизайне */}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
