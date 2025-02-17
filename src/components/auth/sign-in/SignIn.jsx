import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Urls from "../../../Urls";
import "./SignIn.scss";

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
      .post(`${Urls.API_BASE_URL_LOCAL}/api/Authentication/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        login(response.data.token);
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
        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default SignIn;
