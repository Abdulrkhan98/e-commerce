import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const Section = () => {
  const [card, setCard] = useState([])
  const [loading, setLoading] = useState(true)

  const cardFetchapi = async () => {
    try {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/products")
      const data = await res.json()
      setCard(data.slice(0, 20))
    } catch (error) {
      console.log("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cardFetchapi()
  }, [])

  
  const SkeletonBox = () => (
    <div className="rounded-2xl w-90 bg-gray-200 mt-10 animate-pulse">
      <div className="h-90 w-full bg-gray-300 rounded-2xl"></div>
      <div className="px-3 py-6 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  )

  return (
    <>
      <div>
        <div className="flex justify-center mt-8">
          <p className="py-1 bg-blue-950 text-white text-xl w-90 md:w-180 rounded-2xl text-center">
            SUMMER T-Shirt SALE 30%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-20 lg:grid-cols-3 place-items-center">
          {loading
            ? Array.from({ length: 9 }).map((_, i) => <SkeletonBox key={i} />) // 9 fake boxes
            : card.map((item, index) => (
                <div key={index} className="rounded-2xl w-90 bg-blue-50 mt-10">
                  <img
                    className="h-90 rounded-2xl w-full object-contain"
                    src={item.image}
                    alt={item.title || 'product'}
                  />

                  <div className="px-3 py-6">
                    <h3 className="text-2xl">{item.category}</h3>
                    <p className="mt-3">{item.description?.slice(0, 120)}</p>
                    <p className="mt-3">Size left : XL</p>

                    <div className="mt-3 flex items-center gap-3">
                      <span>Color:</span>
                      <div className="h-4 w-4 bg-indigo-400 rounded-full"></div>
                    </div>

                    <button className="w-full bg-blue-900 text-xl hover:bg-blue-950 text-white py-3 mt-3 rounded-2xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <footer>
        <div className="flex justify-center">
          <div className="border-t-3 border-gray-500 mt-20 w-90 md:w-180 lg:w-300"></div>
        </div>

        <div className="flex items-center justify-around">
          <img className="h-20 md:h-25 mt-5" src={logo} alt="logo" />
          <p className="mt-3 md:mt-0 text-sm md:text-xl">
            Copyright © 2025 page by Arif
          </p>
        </div>
      </footer>
    </>
  )
}

export default Section
