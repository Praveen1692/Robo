// components/ServiceCard.jsx

import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-4">
        <img src={icon} alt={`${title} Icon`} className="h-12 w-12" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a className="text-purple-600 font-semibold" href="#">
        Read More <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
}

export default ServiceCard;
