import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Order = () => {

  const[card , setCard] = useState(null)
  const {id} = useParams()
    
     const cardFetchapi = async ()=>{
      try{
          const res = await fetch(`https://e-commerce-backened-4fih.onrender.com/products/${id}`)
          const data = await res.json()
          console.log(data)
          setCard(data)
          
      }catch(error){
          console.log(error, "error")
      }
     }
    useEffect(()=>{
      cardFetchapi()
    },[id])

     if (!card) {
    return (
      <p className="text-center text-4xl mt-20 flex justify-center items-center">Loading ...</p>
    )
  }

  return (
    <>
   <div className='flex justify-center items-center h-180 gap-10 flex-col  md:flex-col lg:flex-row'>
    <div><img className='md:h-150 w-85   md:w-150 object-contain mt-90 md:mt-0' src={card.images || card.image} alt="" /></div>
    <div className='md:h-120 md:w-130  px-5 '>
        <h1 className='text-4xl font-bold'>{card.category}</h1>
        <p className='text-2xl font-bold text-green-500 mt-2'>15% OFF</p>
        <p className='text-xl mt-3 '>{card.description.slice(0,100)}</p>
        <div className='flex flex-col items-start'>
            <select name="" id="" className= ' w-80 md:w-120 py-3 mt-8 border bg-blue-900 text-white px-2'>
            <option value="">BLUE</option>
            <option value="">GREEN</option>
            <option value="">ORANGE</option>
            <option value="">YELLOW</option>
        </select>
        <select name="" id="" className='w-80 md:w-120 py-3 mt-8 border bg-blue-900 text-white px-2'>
            <option value="">XL</option>
            <option value="">XXL</option>
            <option value="">S</option>
        </select>
        <button className='px-8 py-3 bg-blue-800 text-white mt-5 rounded-full hover:bg-blue-500 mb-15 md:mb-0 '>Add to Cart</button>
        </div>
    </div>
   </div>
    </>
  )
}

export default Order
