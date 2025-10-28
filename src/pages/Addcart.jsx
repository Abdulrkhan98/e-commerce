import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'



const Addcart = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20 text-3xl font-semibold">
        🛒 Your cart is empty
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-20 mb-20">
      <h1 className="text-4xl font-bold mb-5">🛒 Your Cart</h1>

      {cart.map((card, index) => (
        <div
          key={index}
          className="flex justify-center items-center border rounded-2xl shadow-2xl gap-10 flex-col md:flex-row lg:flex-row p-10"
        >
        
          <div>
            <img
              className="md:h-150 w-85 md:w-150 object-contain mt-5 md:mt-0"
              src={card.image || card.thumbnail}
              alt={card.title || card.name}
            />
          </div>

         
          <div className="md:h-120 md:w-130 px-5">
            <h1 className="text-4xl font-bold">
              {card.title || card.name}
            </h1>
            <p className="text-2xl font-bold text-green-500 mt-2">
              15% OFF
            </p>
            <p className="text-xl mt-3 ">
              {card.description?.slice(0, 250)}
            </p>
            <p className="text-xl font-semibold mt-3">
              💰 Price: ${card.price}
            </p>

            <div className="flex flex-col items-start">
              <select
                className="w-80 md:w-120 py-3 mt-8 border bg-blue-900 text-white px-2"
              >
                <option value="">BLUE</option>
                <option value="">GREEN</option>
                <option value="">ORANGE</option>
                <option value="">YELLOW</option>
              </select>
              <select
                className="w-80 md:w-120 py-3 mt-8 border bg-blue-900 text-white px-2"
              >
                <option value="">XL</option>
                <option value="">XXL</option>
                <option value="">S</option>
              </select>

              
              <button
                onClick={() => removeFromCart(card.id)}
                className="px-8 py-3 bg-red-600 text-white mt-5 rounded-full hover:bg-red-500"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Addcart
