import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
  const [card, setCard] = useState(null);
  const { id } = useParams();

  const cardFetchapi = async () => {
    try {
      const res = await fetch(`https://e-commerce-backened-4fih.onrender.com/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      console.log("Fetched product:", data);
      setCard(data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    cardFetchapi();
  }, [id]);

  if (!card) {
    return (
      <p className="text-center text-4xl mt-20 flex justify-center items-center">
        Loading...
      </p>
    );
  }

  const productImage = Array.isArray(card.images)
    ? card.images[0]
    : card.thumbnail || card.image;

  return (
    <div className="flex justify-center items-center min-h-screen gap-10 flex-col lg:flex-row p-5">
      <div>
        <img
          className="h-[400px] w-[350px] md:h-[500px] md:w-[500px] object-contain rounded-2xl shadow-lg"
          src={productImage}
          alt={card.title || card.name || "Product"}
        />
      </div>

      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-gray-800">
          {card.title || card.name}
        </h1>
        <p className="text-2xl font-semibold text-green-600 mt-2">15% OFF</p>
        <p className="text-lg text-gray-600 mt-3">
          {card.description ? card.description.slice(0, 150) : "No description available"}
        </p>

        <div className="flex flex-col items-start mt-5">
          <select className="w-72 py-3 mt-3 border bg-blue-900 text-white px-2 rounded-lg">
            <option>BLUE</option>
            <option>GREEN</option>
            <option>ORANGE</option>
            <option>YELLOW</option>
          </select>

          <select className="w-72 py-3 mt-3 border bg-blue-900 text-white px-2 rounded-lg">
            <option>XL</option>
            <option>XXL</option>
            <option>S</option>
          </select>

          <button className="px-8 py-3 bg-blue-800 text-white mt-5 rounded-full hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
