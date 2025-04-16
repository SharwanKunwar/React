import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Us
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
          Welcome to <span className="text-blue-600 font-semibold">MyApp</span>! We're dedicated to providing you with the best experience possible.
          Whether you're here to learn, explore, or create, we've built this platform to support your journey.
        </p>

        <p className="text-sm sm:text-md md:text-lg text-gray-600 mb-8 leading-relaxed">
          Our mission is to make technology accessible, intuitive, and powerful for everyone.
          We're a passionate team of developers, designers, and creators working together to bring you the tools and knowledge you need.
        </p>

        <Link 
          to="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}

export default About
