import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center">
        Welcome to MyApp
      </h1>

      <p className="text-base sm:text-lg text-gray-700 text-center max-w-2xl mb-6 px-2">
        This is a simple homepage built with React and Tailwind CSS. Explore our site to learn more about what we offer.
      </p>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center">
        <Link 
          to="/about" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200 w-full sm:w-auto text-center"
        >
          Learn More
        </Link>
        <Link 
          to="/contact" 
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-200 w-full sm:w-auto text-center"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default Home
