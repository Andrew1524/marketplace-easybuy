import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import axious from "axios";
import "./SignUp.scss";

const SignUp = ({ closeFunc }) => {
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    const terms = e.target.elements.terms.checked;
    const privacy = e.target.elements.privacy.checked;
    const remember = e.target.elements.remember.checked;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
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
    sendSignUpRequest(email, password, remember);

    console.log("Form submitted", { email, password });
  };

  function sendSignUpRequest(email, password, remember) {
    axious
      .post("https://stingray-app-56rei.ondigitalocean.app/auth/signup", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        login(response.data.token, remember);
        closeFunc();
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred. Please try again later.");
      });
  }

  function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return re.test(password);
  }

  return (
    <>
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

        {/* сделай их слева, пж <3 */}
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me?</label>
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms">
          I agree to the <a href="/">terms of service</a>
        </label>
        <input type="checkbox" id="privacy" required />
        <label htmlFor="privacy">
          I agree to the <a href="/">privacy policy</a>
        </label>

        {/* нужно еще эту кнопку разукрасить как в дизайне */}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
