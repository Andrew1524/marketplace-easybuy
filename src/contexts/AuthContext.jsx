import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!checkLocalData()) {
      initLocalData();
    } else {
      const localData = JSON.parse(localStorage.getItem("easybuy"));
      setToken(localData.token);
    }
  }, []);

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
  const login = (token, remember) => {
    // get data from localStorage and update token
    
    
    // if remember is checked, save token in localStorage
    if (remember) {
      // update token in localStorage
      const localData = JSON.parse(localStorage.getItem("easybuy"));
      localData.token = token;

      // and save it
      localStorage.setItem("easybuy", JSON.stringify(localData));
      setToken(token);

    }
    else
    {
      // get data from sessionStorage and update token
      const sessionData = JSON.parse(sessionStorage.getItem("easybuy"));
      sessionData.token = token;

      // save it
      sessionStorage.setItem("easybuy", JSON.stringify(sessionData));
      setToken(token);
    }

  };

  // removes token from localStorage, session and from state
  const logout = () => {

    // remove token from localStorage
    const localData = JSON.parse(localStorage.getItem("easybuy"));
    localData.token = null;
    localStorage.setItem("easybuy", JSON.stringify(localData));
    
    // remove token from sessionStorage
    const sessionData = JSON.parse(sessionStorage.getItem("easybuy"));
    sessionData.token = null;
    sessionStorage.setItem("easybuy", JSON.stringify(sessionData));
    
    // remove token from state
    setToken(null);
  };

  function isAuth() {
    return token !== null;
  }


  return (
    <AuthContext.Provider value={{ token, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
