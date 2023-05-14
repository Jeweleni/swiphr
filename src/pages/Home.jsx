import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='justify-center flex flex-col items-center mt-12 px-4 py-2 '>
      <h1 className=''>This is the home page for Sellaz</h1>
      <p>An intervew task for swiphr</p>
      <p>By Jewel Eni</p>

      <Link to="/products/allproducts" className='bg-green-500 text-white px-4 py-2 rounded-lg flex items-center mt-8'>Continue to main dashboard</Link>
    </div>
  )
}

export default Home