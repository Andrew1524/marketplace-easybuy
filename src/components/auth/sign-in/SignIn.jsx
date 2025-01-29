import React from "react";
import "./SignIn.scss";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const SignIn = ({ closeFunc }) => {
  // выводить куда то
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.checked;

    sendSignInRequest(email, password, remember);

    console.log("Form submitted", { email, password });
  };

  function sendSignInRequest(email, password, remember) {
    axios
      .post("https://stingray-app-56rei.ondigitalocean.app/auth/login", {
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

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="remember">Remember me</label>
        <input type="checkbox" id="remember" name="remember" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default SignIn;
