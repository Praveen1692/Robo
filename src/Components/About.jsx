import React from "react";

function About() {
  return (
    <div className="bg-gray-50 text-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-base text-purple-600 font-semibold tracking-wider uppercase animate-fade-in">
            WHO WE ARE?
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 leading-tight max-w-3xl">
            At our AI startup, we follow a streamlined approach to ensure the best outcomes for your business
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative group w-full md:w-1/2">
              <img
                alt="AI robot interacting with digital interfaces"
                className="rounded-xl shadow-xl w-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/zZpbtVG8LpZffb2lNL8I4so5F3p9uo_WP0KHUf1Moew.jpg"
                width="600"
              />
              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </div>
            <div className="relative group w-full md:w-1/2 mt-6 md:mt-12">
              <img
                alt="Futuristic AI humanoid with digital background"
                className="rounded-xl shadow-xl w-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/MvHyo9Wl7SSZAG5p-CzLoYNgQlR0xCEkVXe8l4jABkI.jpg"
                width="600"
              />
              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-10 lg:ml-12">
            <div className="relative">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-purple-600 mr-3 transform transition-transform duration-300 hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 relative">
                  100% Customer Satisfaction
                  <span className="absolute -bottom-1 left-0 w-16 h-1 bg-purple-600 rounded-full"></span>
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                We bring a team of experienced AI specialists, data scientists, and industry experts committed to pushing boundaries.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-purple-600 mr-3 transform transition-transform duration-300 hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93V15H7v-3h4V6.07c3.61.45 6.48 3.32 6.93 6.93H13v3h4.07c-.45 3.61-3.32 6.48-6.93 6.93z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 relative">
                  Quality Assurance Guarantee
                  <span className="absolute -bottom-1 left-0 w-16 h-1 bg-purple-600 rounded-full"></span>
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Our rigorous quality processes ensure reliable, high-performing AI solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;