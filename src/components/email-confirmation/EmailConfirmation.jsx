import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EmailConfirmation.scss";

const EmailConfirmation = () => {
  const { email, token } = useParams();

  useEffect(() => {
    console.log(email, token);
  }, [email, token]);

  return (
    <div className="confirmation-container">
      <h1>Success!</h1>
      <p>Your email has been confirmed.</p>
    </div>
  );
};

export default EmailConfirmation;
