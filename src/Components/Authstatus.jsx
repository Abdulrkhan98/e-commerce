import React, { createContext, useState } from 'react';

export const contextApi = createContext();

const AuthStatus = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") || false);

  return (
    <contextApi.Provider value={{ userName, setUserName, isAuthenticated, setIsAuthenticated }}>
      {children}
    </contextApi.Provider>
  );
};

export default AuthStatus;
