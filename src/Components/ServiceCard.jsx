// components/ServiceCard.jsx

import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon Container */}
      <div className="flex items-center justify-center mb-6 relative">
        <div className="p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
          <img 
            src={icon} 
            alt={`${title} Icon`} 
            className="h-12 w-12 transform group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-5 leading-relaxed text-base">
        {description}
      </p>

      {/* Read More Link */}
      <a 
        href="#" 
        className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300 group/link"
      >
        Read More
        <svg 
          className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </div>
  );
}

export default ServiceCard;