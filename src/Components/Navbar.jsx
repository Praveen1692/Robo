import React from "react";

function Navbar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center">
          <div className="mr-2 text-purple-400 text-3xl animate-pulse">🤖</div>
          <span className="text-white font-extrabold text-2xl tracking-tight">Robor</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {["Home", "About Us", "Services", "Pages", "Blog", "Contact Us"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-200 hover:text-purple-400 transition-colors duration-300 text-lg font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-purple-600/50">
            Get Started Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
          <button className="text-white hover:text-purple-400 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
          className="absolute inset-0 bg-black bg-opacity-75 z-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(https://thumbs.dreamstime.com/b/human-hand-robotic-interacting-together-digital-keyboard-symbolizing-integration-artificial-intelligence-modern-346835071.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(60%) blur(2px)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex items-center flex-col-reverse md:flex-row justify-between px-6 lg:px-12 py-20 min-h-[calc(100vh-80px)]">
          <div className="text-center mt-12 md:mt-0 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white animate-fade-in">
              Revolutionize Your Business With Cutting-Edge AI Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
              Empowering innovation with AI-driven tools tailored for your success.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-600/50 group">
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
              <button className="border-2 border-purple-400 hover:bg-purple-600 hover:border-purple-600 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg">
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