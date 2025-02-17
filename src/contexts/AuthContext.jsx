import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    validateLocalAndSessionData();

    if(getTokenFromLocal() !== null) {
      setToken(getTokenFromLocal());
      return;
    }

    if(getTokenFromSession() !== null) {
      setToken(getTokenFromSession());
      return;
    }
  }, []);


function getTokenFromLocal() {
  if (!checkLocalData()) {
    return null;
  }

  const localData = JSON.parse(localStorage.getItem("easybuy"));
  return localData && localData.token ? localData.token : null;
}
  function getTokenFromSession() {
    const sessionData = JSON.parse(sessionStorage.getItem("easybuy"));
    return sessionData.token;
  }

  function validateLocalAndSessionData() {
    if (!checkSessionData()) {
      initSessionData();
      console.log('session data initialized');
    }
    if (!checkLocalData()) {
      initLocalData();
      console.log('local data initialized');
    }
  }

  // checks if 'easybuy' object exists in localStorage
  function checkLocalData() {
    const localData = localStorage.getItem("easybuy");
    if (localData) {
      return true;
    }
    return false;
  }

  // checks if 'easybuy' object exists in sessionStorage
  function checkSessionData() {
    const sessionData = sessionStorage.getItem("easybuy");
    if (sessionData) {
      return true;
    }
    return false;
  }

  // initializes 'easybuy' in sessionStorage
  function initSessionData() {
    sessionStorage.setItem("easybuy", JSON.stringify({ token: null }));
  }

  // initializes 'easybuy' in localStorage
  function initLocalData() {
    localStorage.setItem("easybuy", JSON.stringify({ token: null }));
  }

  // updates token in localStorage and in state
  const login = (token_data) => {

    localStorage.setItem("easybuy", JSON.stringify(token_data));
    setToken(token_data.token);

  };

  // removes token from localStorage, session and from state
  const logout = () => {
    // remove token from localStorage
    const localData = JSON.parse(localStorage.getItem("easybuy"));
    localData.token = null;
    localStorage.setItem("easybuy", JSON.stringify(localData));

    setToken(null);
  };

  function isAuth() {

    console.log('isAuth called');
    return token !== null;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
