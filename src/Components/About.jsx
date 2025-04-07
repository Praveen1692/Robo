import React from "react";

function About() {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-left mb-8">
          <h2 className="text-sm text-purple-600 font-semibold">WHO WE ARE?</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            At our AI startup, we follow a streamlined approach to ensure the
            best outcomes for your business.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              alt="AI robot interacting with digital interfaces"
              className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/zZpbtVG8LpZffb2lNL8I4so5F3p9uo_WP0KHUf1Moew.jpg"
              width="600"
            />
            <img
              alt="Futuristic AI humanoid with digital background"
              className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/MvHyo9Wl7SSZAG5p-CzLoYNgQlR0xCEkVXe8l4jABkI.jpg"
              width="600"
            />
          </div>
          <div className="flex flex-col justify-center ml-10">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                {/* Replaced Font Awesome with inline SVG */}
                <svg
                  className="h-6 w-6 text-purple-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h3 className="text-xl font-bold">
                  100% Customer Satisfaction
                </h3>
              </div>
              <p className="text-gray-700">
                We bring a team of experienced AI specialists, data scientists,
                and industry experts committed to pushing boundaries.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                {/* Replaced Font Awesome with inline SVG */}
                <svg
                  className="h-6 w-6 text-purple-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93V15H7v-3h4V6.07c3.61.45 6.48 3.32 6.93 6.93H13v3h4.07c-.45 3.61-3.32 6.48-6.93 6.93z" />
                </svg>
                <h3 className="text-xl font-bold">
                  Quality Assurance Guarantee
                </h3>
              </div>
              <p className="text-gray-700">
                Our rigorous quality processes ensure reliable, high-performing
                AI solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
