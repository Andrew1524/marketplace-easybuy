import React, { useState } from "react";

import SignUp from "./sign-up/SignUp";
import SignIn from "./sign-in/SignIn";

import "./AuthModal.scss";

const AuthModal = ({ isShown, toggleIsShown }) => {

  function close(){
    console.log("close");
    toggleIsShown(false);
  }
  // decide if the user is logging in or signing up
  // if true  => logging in
  // if false => signing up
  const [registered, toggleRegistered] = useState(true);
  // const [shown, toggleShown] = useState(isShown);


  return (
    <div className={isShown ? "modal" : "hidden"}>
      <div className="content">
        <span
          className="close-button"
          onClick={() => {
            console.log("close");
            close();
          }}
        >
          &times;
        </span>
        {registered ? <SignIn closeFunc={close}/> : <SignUp closeFunc={close}/>}
        {registered ? (
          <div className="auth-actions">
            <a href="/">Forgot password?</a>
            <a href="#" onClick={() => toggleRegistered(false)}>
              Sign up
            </a>
          </div>
        ) : (
          <div className="auth-actions">
            Already have an account?
            <a href="#" onClick={() => toggleRegistered(true)}>
              Sign in
            </a>
          </div>
        )}
      </div>

      {/* OR section with Google, Facebook, Apple */}
    </div>
  );
};

export default AuthModal;
