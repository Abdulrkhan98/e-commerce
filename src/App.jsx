import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
 import Homepage from "./pages/Homepage";
import Womens from "./pages/Category";
import Order from "./Components/Order";


const App = () => {
 

  return (
    <>
    
       <Routes>
        <Route path="/" element={<Homepage/>}  />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:categorie" element={ <Womens/> }/>
        <Route path="order/:id" element={<Order/>}/>
      </Routes> 


     
     

      
    </>
  );
};

export default App;