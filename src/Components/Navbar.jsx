import React from "react";

function Navbar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="mr-2 text-purple-500 text-2xl">🤖</div>
          <span className="text-white font-bold text-2xl">Robor</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400">
              Home
            </a>
            <a href="#" className="hover:text-purple-400">
              About Us
            </a>
            <a href="#" className="hover:text-purple-400">
              Services
            </a>
            <a href="#" className="hover:text-purple-400">
              Pages
            </a>
            <a href="#" className="hover:text-purple-400">
              Blog
            </a>
            <a href="#" className="hover:text-purple-400">
              Contact Us
            </a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 flex items-center">
            Get Started Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image + Dark Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-70 z-0"
          style={{
            backgroundImage: `url(https://thumbs.dreamstime.com/b/human-hand-robotic-interacting-together-digital-keyboard-symbolizing-integration-artificial-intelligence-modern-346835071.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(60%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex items-center flex-col-reverse md:flex-row justify-between px-6 py-16 min-h-[calc(100vh-80px)]">
          <div className="text-center mt-12 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Revolutionize Your Business With Cutting-Edge AI Solutions.
            </h1>
             <p className="mt-6 text-lg text-white font-bold max-w-lg mx-auto">
              Empowering innovation with AI-driven tools tailored for your
              success.
            </p> 
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center">
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <button className="border hover:bg-purple-600 border-gray-400 hover:border-white text-white font-medium py-3 px-6 rounded-full transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
