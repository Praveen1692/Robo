// components/Services.jsx

import React from "react";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    title: "AI Development",
    description:
      "Creating and optimizing models using proprietary or customer data. AI model tailored to specific business needs.",
    icon:
      "https://storage.googleapis.com/a1aa/image/XEyG9QUyonw4YFcwlfvpc59kYhLwk6ZRQJo5H9VVvb8.jpg",
  },
  {
    title: "Data Analytics",
    description:
      "Providing insights for time-sensitive decisions. Forecasting trends, risks, and opportunities.",
    icon:
      "https://storage.googleapis.com/a1aa/image/-lze0xUML-kXWPT2swfdJdItKPH0fo1-WYZ5L_cFN4U.jpg",
  },
  {
    title: "Machine Learning",
    description:
      "Building algorithms tailored to specific needs. Using advanced techniques to improve accuracy and efficiency.",
    icon:
      "https://storage.googleapis.com/a1aa/image/1OFeGYAgsPmXUj7sN1fRsCzstM7kDZjnI1oLYzMAGco.jpg",
  },
  {
    title: "AI Consulting Services",
    description:
      "Helping businesses identify the most impactful AI applications. Evaluating a business's preparedness.",
    icon:
      "https://storage.googleapis.com/a1aa/image/mvgz7XjZCo1r-at2RjJkntGDm9PGX-OKN2rK25mY5Pc.jpg",
  },
  {
    title: "Automation And Process",
    description:
      "Automating repetitive tasks like data entry or invoice processing. Enhancing customer support.",
    icon:
      "https://storage.googleapis.com/a1aa/image/QA7PGpBodFVWBmX8qvfgzWH5g4yyHZapzkE3w-wrcms.jpg",
  },
  {
    title: "Education & Science",
    description:
      "Diagnostic tools, patient management systems, and predictive care. Fraud detection, algorithmic trading.",
    icon:
      "https://storage.googleapis.com/a1aa/image/oHzDbCVRIltuDfltS2dF0ACPT8NYwMJ4SGTQf4g6Ixc.jpg",
  },
  {
    title: "AI Research",
    description:
      "Automating repetitive tasks like data entry or invoice processing. Enhancing efficiency by integrating.",
    icon:
      "https://storage.googleapis.com/a1aa/image/e4r52M268r1dAGWMosUcR-iJ8puPz-3xnXLw3HUTrFg.jpg",
  },
  {
    title: "AI In Cybersecurity",
    description:
      "Ensuring system integrity through AI-driven oversight. Using AI to detect anomalies and prevent.",
    icon:
      "https://storage.googleapis.com/a1aa/image/j6EEyF83PrXh86VDNNunSRmeDeFqWGlKeLPObDD8gRI.jpg",
  },
];

function Services() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white font-roboto py-20">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-purple-600 text-base font-semibold tracking-wider uppercase animate-fade-in">
          OUR SERVICES
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 max-w-3xl mx-auto leading-tight">
          Intelligent Innovations: Tailored AI Solutions
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our comprehensive range of AI-powered services designed to transform your business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-500 hover:-translate-y-2"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;