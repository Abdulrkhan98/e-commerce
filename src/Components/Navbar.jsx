import React, { useState,useContext } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../assets/logo.png'
import { contextApi } from './Authstatus';


const Navbar = () => {

  const [menuicon, setMenuicon] = useState(false);

  const handleclickbtn = () => {
    setMenuicon(!menuicon);
  };
const bio = useContext(contextApi)
console.log(bio)
  return (
    <header>
      <nav>
        {/* Top Bar */}
        <div className='py-3 bg-black flex justify-center text-white items-center'>
          <p className='text-[25px] md:text-xl'>Welcome All</p>
        </div>

        {/* Main Navbar */}
        <div className='flex justify-between px-5 md:px-10 items-center h-20'>
          <div>
            <p className='text-[20px] md:text-xl font-bold'><img className='h-20' src={logo} alt="" /></p>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-5 items-center text-[15px] md:text-xl'>
            <p>Logout</p>
            <p className='flex items-center gap-1'><CiHeart />Wish List</p>
            <p className='flex items-center gap-1'><FaShoppingBag />Shopping Bag</p>
            <p>Hi {bio.userName }</p>
          </div>

          {/* Mobile Menu */}
          {menuicon ? (
            <div className='absolute top-0 left-0 bg-yellow-300 px-11 h-80 fixed  ml-55 lg:hidden flex flex-col items-center justify-center gap-4 z-50'>
              <AiOutlineClose className='text-[27px]' onClick={handleclickbtn} />
              <p>Logout</p>
              <p className='flex items-center gap-1'><CiHeart />Wish List</p>
              <p className='flex items-center gap-1'><FaShoppingBag />Shopping Bag</p>
              <p>Hi User</p>
            </div>
          ) : (
            <IoMenuSharp className='md:hidden text-[25px]' onClick={handleclickbtn} />
          )}
        </div>

        {/* Bottom Bar */}
        <div className='py-3 bg-black text-[10px] md:text-xl flex justify-around items-center text-white'>
          <p>50% OFF</p>
          <p>Free shipping and return</p>
          <p>Different payment methods</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
