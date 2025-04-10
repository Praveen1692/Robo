import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$25.95",
    members: "Up to 10 Members per month",
    features: [
      "Cultivation plans and field boundaries",
      "Scouting reproducible",
      "Satellite relative crop moisture",
    ],
    buttonColor: "bg-gray-900",
  },
  {
    name: "Standard",
    price: "$85.95",
    members: "Up to 20 Members per month",
    features: [
      "Satellite images every day",
      "3-7 m resolution images",
      "High-times of supply image",
    ],
    buttonColor: "bg-purple-600",
  },
  {
    name: "Premium",
    price: "$165.95",
    members: "Up to 50 Members per month",
    features: [
      "Access to the most attractive field",
      "Soil moisture, soil temperature",
      "Updated use of the biomass precision",
    ],
    buttonColor: "bg-gray-900",
  },
];

function Pricing() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 lg:px-12">
        {/* Header */}
        <h3 className="text-sm text-purple-600 font-semibold uppercase tracking-wider animate-fade-in">
          Pricing Plan
        </h3>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 text-center">
          Affordable Pricing Plan
        </h1>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-xl rounded-xl p-8 flex flex-col items-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.name === "Standard" ? "border-2 border-purple-600" : ""
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {plan.name}
              </h2>
              <div className="w-full bg-gray-100 rounded-lg p-5 text-center mb-6">
                <p className="text-purple-600 text-4xl font-extrabold">
                  {plan.price}
                </p>
                <p className="text-gray-600 text-sm mt-2">{plan.members}</p>
              </div>

              <ul className="text-gray-700 space-y-4 text-center flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center space-x-3">
                    <span className="text-purple-600 text-lg">✓</span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`${plan.buttonColor} mt-8 px-6 py-3 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                Choose Your Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;