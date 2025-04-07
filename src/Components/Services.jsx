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
    <div className="bg-gray-50 font-roboto mb-10">
      <div className="text-center py-16">
        <h2 className="text-purple-600 text-sm font-semibold">OUR SERVICES</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Intelligent Innovations: Tailored AI Solutions
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
