import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EmailConfirmation.scss";
import axios from "axios";
import Urls from "../../Urls";

const EmailConfirmation = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    const token = queryParams.get("token");

    useEffect(() => {
        axios
            .post(`${Urls.API_BASE_URL_LOCAL}/api/Authentication/confirm-register`, {
                email,
                token,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [email, token]);

  return (
    <div className="confirmation-container">
      <h1>Success!</h1>
      <p>Your email has been confirmed.</p>
            <p>{email}</p>
            <p>{token}</p>
    </div>
  );
};

export default EmailConfirmation;
