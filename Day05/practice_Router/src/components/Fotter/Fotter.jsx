import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-white">
              MyApp
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-white transition duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-white transition duration-300">
              About
            </Link>
            <Link to="/contact" className="hover:text-white transition duration-300">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-white transition duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
