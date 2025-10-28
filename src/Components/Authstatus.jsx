import React, { createContext, useState } from 'react'


export const contextApi = createContext()
const Authstatus = ({children}) => {
    
const [userName , setUserName]=useState("")
const [isAuthenticated , setIsAuthentcated] = useState(false)
    
  return (
    <div>
      <contextApi.Provider value={{setUserName ,userName,setIsAuthentcated,isAuthenticated}}>
        {children}
      </contextApi.Provider>
    </div>
  )
}

export default Authstatus
