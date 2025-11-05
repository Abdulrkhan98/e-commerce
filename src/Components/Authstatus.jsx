import React, { createContext, useState } from 'react';

// Context create karo
export const AuthContext = createContext();

const AuthStatus = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" // ✅ convert string to boolean
  );

  return (
    <AuthContext.Provider value={{ userName, setUserName, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthStatus;
