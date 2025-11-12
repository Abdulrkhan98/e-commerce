import React, { useState, useContext, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
import { contextApi } from "./Authstatus";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuicon, setMenuicon] = useState(false);
  const { setUserName, userName, setIsAuthentcated, isAuthenticated } = useContext(contextApi);

  const handleclickbtn = () => {
    setMenuicon(!menuicon);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("isAuthenticated");
    setIsAuthentcated(false);
    setUserName("");
    navigate("/login");
    console.log("navigate");
  };

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log("userName:", userName);
  }, [isAuthenticated, userName]);

  return (
    <header>
      <nav>
        {/* Top Bar */}
        <div className="py-3 bg-black flex justify-center text-white items-center">
          <p className="text-[25px] md:text-xl">Welcome All</p>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between px-5 md:px-10 items-center h-20">
          <div>
            <img className="h-20" src={logo} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 items-center text-[15px] md:text-xl">
            <p onClick={handleLogout} className="hover:text-gray-500">
              Logout
            </p>
            <p className="flex items-center gap-1">
              <CiHeart /> Wish List
            </p>
            <p className="flex items-center gap-1">
              <FaShoppingBag /> Shopping Bag
            </p>
            <p>Hi {userName}</p>
          </div>

          {/* Mobile Menu */}
          {menuicon ? (
            <div
              className="fixed top-0 right-0 h-screen w-[70%] sm:w-[60%] 
                         bg-gradient-to-b from-blue-100 to-blue-200 shadow-2xl
                         flex flex-col items-center justify-center gap-6 z-50 
                         rounded-l-3xl transition-transform duration-300 ease-in-out
                         animate-slide-in-right lg:hidden"
            >
              {/* Close Button */}
              <AiOutlineClose
                className="text-[28px] text-blue-900 absolute top-5 left-5 cursor-pointer hover:text-blue-700 transition"
                onClick={handleclickbtn}
              />

              <p className="text-xl font-semibold text-blue-900 mr-17">
                Hi, {userName || "Guest"}
              </p>

              <div className="flex flex-col items-start w-[80%] gap-4 mt-4">
                <p
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-lg text-blue-900 hover:bg-blue-300 transition cursor-pointer"
                >
                  Logout
                </p>

                <p className="w-full flex items-center gap-3 p-3 rounded-xl text-lg text-blue-900 hover:bg-blue-300 transition cursor-pointer">
                  Wish List
                </p>

                <p className="w-full flex items-center gap-3 p-3 rounded-xl text-lg text-blue-900 hover:bg-blue-300 transition cursor-pointer">
                  Shopping Bag
                </p>
              </div>
            </div>
          ) : (
            <IoMenuSharp
              className="md:hidden text-[25px]"
              onClick={handleclickbtn}
            />
          )}
        </div>

        {/* Bottom Bar */}
        <div className="py-3 bg-black text-[10px] md:text-xl flex justify-around items-center text-white">
          <p>50% OFF</p>
          <p>Free shipping and return</p>
          <p>Different payment methods</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
