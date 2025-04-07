import React from 'react'
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
      buttonColor: "bg-black",
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
      buttonColor: "bg-black",
    },
  ];
  
  

function Pricing() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <h3 className="text-sm text-purple-600 font-semibold uppercase">Pricing Plan</h3>
      <h1 className="text-3xl font-bold text-gray-900 mt-2">Affordable Pricing Plan</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
            <div className=' w-full  bg-gray-100 mx-auto p-4'>
            <p className="text-purple-600 text-3xl font-bold mt-2">{plan.price}</p>
            <p className="text-gray-600 text-sm mt-1">{plan.members}</p>
            </div>

          


            <ul className="mt-4 text-gray-700 space-y-2 text-center">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-purple-600">&#8226;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 px-6 py-2 text-white font-medium rounded-lg ${plan.buttonColor} hover:opacity-80`}
            >
              Choose Your Plan
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Pricing