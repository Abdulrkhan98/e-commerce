<<<<<<< HEAD
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
=======
import React, { createContext, useState } from 'react'


export const contextApi = createContext()
const Authstatus = ({children}) => {
    
const [userName , setUserName]=useState(localStorage.getItem("userName") || "")
const [isAuthenticated , setIsAuthentcated] = useState(localStorage.getItem("isAuthenticated")|| false)
    
  return (
    <div>
      <contextApi.Provider value={{setUserName ,userName,setIsAuthentcated,isAuthenticated}}>
        {children}
      </contextApi.Provider>
    </div>
  )
}

export default Authstatus
>>>>>>> upstream/main
