<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clothes from '../assets/clothes.jpg';
=======
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clothes from "../assets/clothes.jpg";
>>>>>>> upstream/main

const Button = () => {
  const [categories, setCategories] = useState([]);

<<<<<<< HEAD
  
=======
>>>>>>> upstream/main
  const fetchCategories = async () => {
    try {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/categories");
      const data = await res.json();
<<<<<<< HEAD
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error, "error fetching categories");
=======

      console.log("Fetched categories:", data);

     
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        setCategories([]);
        console.warn("API did not return an array:", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
>>>>>>> upstream/main
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
<<<<<<< HEAD
   
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
=======
    
      <div className="py-10 flex flex-col items-center">
        <div className="flex gap-3 overflow-x-auto px-4 w-full max-w-[90vw] scrollbar-hide">
          {categories.length > 0 ? (
            categories.map((categorie, index) => {
             
              const name = typeof categorie === "string" ? categorie : categorie?.name || "Unknown";

              return (
                <Link key={index} to={`/${name}`}>
                  <button className="whitespace-nowrap border px-6 py-3 bg-white text-black hover:bg-blue-950 hover:text-white rounded-md transition">
                    {name}
                  </button>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-500">Loading categories...</p>
          )}
        </div>
      </div>

     
      <div className="flex justify-center">
        <div className="text-white bg-blue-950 py-2 rounded-2xl text-2xl text-center w-80 md:w-96">
>>>>>>> upstream/main
          SALES UPTO 50%
        </div>
      </div>

     
      <div className="flex justify-center mt-10">
        <img
<<<<<<< HEAD
          className="md:h-140 w-90 md:w-250 shadow-2xl object-contain rounded-2xl"
=======
          className="w-[350px] md:w-[600px] h-auto shadow-2xl object-contain rounded-2xl"
>>>>>>> upstream/main
          src={clothes}
          alt="sale"
        />
      </div>
    </>
  );
};

export default Button;
