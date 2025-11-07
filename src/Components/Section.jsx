import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Section = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  const cardFetchapi = async () => {
    try {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/products");
      const data = await res.json();

      const products = data.products ? data.products.slice(0, 20) : data.slice(0, 20);

      setCard(products);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cardFetchapi();
  }, []);

  const SkeletonBox = () => (
    <div className="rounded-2xl max-w-sm w-full bg-gray-200 mt-10 animate-pulse">
      <div className="h-80 w-full bg-gray-300 rounded-2xl"></div>
      <div className="px-3 py-6 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-center mt-8">
        <p className="py-2 bg-blue-950 text-white text-xl w-80 md:w-96 rounded-2xl text-center">
          SUMMER T-SHIRT SALE 30%
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20 place-items-center">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => <SkeletonBox key={i} />)
          : card.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl max-w-sm w-full bg-blue-50 mt-10 shadow-md hover:shadow-lg transition"
              >
                <img
                  className="h-80 w-full object-contain rounded-t-2xl bg-white"
                  src={item.image || item.thumbnail}
                  alt={item.title || "product"}
                />

                <div className="px-3 py-6">
                  <h3 className="text-2xl font-semibold">{item.category}</h3>
                  <p className="mt-3 text-gray-700">{item.description?.slice(0, 120)}...</p>
                  <p className="mt-3 text-gray-600">Size left : XL</p>

                  <div className="mt-3 flex items-center gap-3">
                    <span>Color:</span>
                    <div className="h-4 w-4 bg-indigo-400 rounded-full"></div>
                  </div>

                  <button className="w-full bg-blue-900 text-xl hover:bg-blue-950 text-white py-3 mt-4 rounded-2xl transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
      </div>

      <footer className="mt-20 border-t border-gray-400 pt-6 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-around gap-4">
          <img className="h-16 md:h-20" src={logo} alt="logo" />
          <p className="text-center text-gray-700 text-sm md:text-base">
            © 2025 Page by Abdulrkhan
          </p>
        </div>
      </footer>
    </>
  );
};

export default Section;
