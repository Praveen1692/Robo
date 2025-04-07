import React from 'react'
import Robot from "../../public/Images/Robot.jpeg"
function Footer() {
  return (
    <div>
        <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-24">
        {/* Left Column */}
        <div className="z-10 w-full md:w-1/2">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wider mb-2">GET STARTED</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Let's Make Something<br />Great Together
            </h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center transition-all">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column - Robot Image */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img 
            src={Robot}
            alt="Purple Robot" 
            className="max-w-full h-auto"
          />
        </div>

        {/* Background "Robor" Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-5 pointer-events-none">
          <h1 className="text-[14rem] md:text-[20rem] font-bold">Robor</h1>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto bg-gradient-to-r from-purple-900 to-purple-600 rounded-t-3xl px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">R</span>
              </div>
              <h2 className="text-2xl font-bold">Robor</h2>
            </div>
            <p className="text-sm text-gray-400">
              Data privacy and security are at the core of our operations, ensuring compliance with global standards like GDPR and HIPAA.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.935 9.935 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Useful Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Home</a></li>
              <li><a href="#" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400">Features</a></li>
              <li><a href="#" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#" className="hover:text-purple-400">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">What we Offer</a></li>
              <li><a href="#" className="hover:text-purple-400">Our Story</a></li>
              <li><a href="#" className="hover:text-purple-400">Latest Posts</a></li>
              <li><a href="#" className="hover:text-purple-400">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400">Our Partners</a></li>
            </ul>
          </div>

          {/* Services & App Downloads */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Our Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Robotic Automation</a></li>
                <li><a href="#" className="hover:text-purple-400">Education & Science</a></li>
                <li><a href="#" className="hover:text-purple-400">Machine Learning</a></li>
                <li><a href="#" className="hover:text-purple-400">Predictive Analysis</a></li>
                <li><a href="#" className="hover:text-purple-400">Data Security</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Get The App</h3>
              <p className="text-gray-400 text-sm">We suggest connecting apps</p>
              <div className="flex flex-col space-y-2">
                <a href="#" className="flex items-center space-x-2 bg-black hover:bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-black hover:bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 3c-2.08 0-3.84 1.18-4.5 3-0.81-1.99-2.82-3-5-3-3.020 0-5.5 2.48-5.5 5.5 0 4.12 4.39 8.7 9.5 14.5 0.55-0.62 3.95-4.43 7.08-8.45 2.78-3.56 4.42-6.48 4.42-8.7 0-3.2-1.99-5.5-5-5.5h-1z"></path>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>






    </div>
  )
}

export default Footer