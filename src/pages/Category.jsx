import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Womens = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categorie } = useParams();

  const cardFetchapi = async () => {
    try {
      
      const res = await fetch(
        `https://e-commerce-backened-4fih.onrender.com/categories/${categorie}`
      );
      const data = await res.json();
      setCard(data);
      console.log("data",data)
    } catch (error) {
      console.log("Error:", error);
     
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cardFetchapi();
  }, [categorie]);

  const priceBtn = () => {
    const sorted = [...card].sort((a, b) => b.price - a.price);
    setCard(sorted);
  };

  const skeletonCount = 8; 

  return (
    <>
      <div className="mt-10 px-10">
        <p className="text-2xl font-bold text-gray-700 capitalize">
          {categorie}
        </p>
      </div>

     
     
      <div className="flex flex-col lg:flex-row justify-between px-10 mt-10 lg:gap-0 gap-3 ">
        <div className="flex gap-2.5 flex-col lg:flex-row">
          <button className="border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white">
            MALE
          </button>
          <button className="border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white">
            FEMALE
          </button>
          <button
            onClick={priceBtn}
            className="border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white"
          >
            HIGH PRICE
          </button>
          <select className="border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white">
            <option>SELECT A COLOR</option>
            <option>Green</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Blue</option>
            <option>Pink</option>
            <option>Black</option>
            <option>Gray</option>
          </select>
          <select className="border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white">
            <option>SELECT A SIZE</option>
            <option>XXL</option>
            <option>XL</option>
            <option>S</option>
            <option>XS</option>
          </select>
        </div>

        <div>
          <button
            onClick={cardFetchapi}
            className="border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white"
          >
            CLEAR FILTER
          </button>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-10 gap-10 px-10">
          {loading
            ? 
              Array.from({ length: skeletonCount }).map((_, i) => (
                <div
                  key={i}
                  className="w-72 h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
                >
                  <div className="h-60 bg-gray-200 w-full rounded-t-2xl"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="flex justify-between mt-4">
                      <div className="h-4 w-16 bg-gray-200 rounded"></div>
                      <div className="flex gap-2">
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                    <div className="h-10 w-full bg-gray-200 rounded-2xl mt-3"></div>
                  </div>
                </div>
              ))
            : 
              card.map((item, index) => (
                <Link key={index} to={`/order/${item.id}`}>
                  <div className="w-72 h-[400px] bg-white rounded-2xl shadow-lg hover:shadow-gray-500 hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                    <img
                      className="h-60 w-full object-contain p-2"
                      src={item.thumbnail || item.image}
                      alt={item.title}
                    />
                    <div className="px-4 py-3">
                      <h3 className="text-lg font-bold truncate">
                        {item.title || item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {item.description?.slice(0, 80)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-lg font-semibold text-gray-800">
                          ₹{item.price}
                        </p>
                        <div className="flex gap-2">
                          <div className="h-4 w-4 rounded-full bg-amber-900"></div>
                          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                          <div className="h-4 w-4 rounded-full bg-orange-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </section>
    </>
  );
};

export default Womens;
