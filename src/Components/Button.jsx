import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clothes from '../assets/clothes.jpg';

const Button = () => {
  const [categories, setCategories] = useState([]);

  
  const fetchCategories = async () => {
    try {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/categories");
      const data = await res.json();
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error, "error fetching categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
   
      <div className="py-10 flex flex-col items-center">
        <div
          className="flex gap-3 overflow-x-auto no-scrollbar px-4 w-full max-w-[90vw]"
          
        >
          {categories.map((categorie, index) => (
            <Link key={index} to={`/${categorie}`}>
              <button className="whitespace-nowrap border px-6 py-3 bg-white text-black hover:bg-blue-950 hover:text-white rounded-md">
                {categorie}
              </button>
            </Link>
          ))}
        </div>
      </div>

    
      <div className="flex justify-center">
        <div className="text-white bg-blue-950 py-2 rounded-2xl text-2xl text-center w-90 md:w-180">
          SALES UPTO 50%
        </div>
      </div>

     
      <div className="flex justify-center mt-10">
        <img
          className="md:h-140 w-90 md:w-250 shadow-2xl object-contain rounded-2xl"
          src={clothes}
          alt="sale"
        />
      </div>
    </>
  );
};

export default Button;
