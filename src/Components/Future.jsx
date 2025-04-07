import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
      question: "What is an AI startup, and what services do you offer?",
      answer:
        "An AI Software as a Service startup combines the scalability of cloud-based platforms with the power of artificial intelligence to deliver innovative on-demand solutions. These startups cater to a wide range of industries by offering AI-driven tools and applications that solve specific business challenges, enhance efficiency, and drive data-informed decisions. The AI industry is rapidly expanding, with opportunities to disrupt traditional industries and create entirely new markets. Continuous advancements in hardware and algorithms position AI startups to play a pivotal role in shaping the future.",
    },
    {
      question: "Do you offer pre-built AI models or create everything from scratch?",
      answer: "We provide both pre-built AI models and custom-built solutions tailored to specific business needs.",
    },
    {
      question: "What is the process for developing an AI solution for my business?",
      answer: "Our process includes consultation, data collection, model development, testing, and deployment to ensure a seamless AI solution.",
    },
    {
      question: "How do you ensure data privacy and compliance with regulations?",
      answer: "We follow strict data security protocols and adhere to industry regulations to ensure privacy and compliance.",
    },
  ];

function Future() {
    const [openIndex, setOpenIndex] = useState(null);
  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div>
      <div className="bg-gradient-to-b from-purple-900 to-black text-white py-16 px-4 md:px-16 text-center">
        <h3 className="text-sm text-white  uppercase">Advanced Technology</h3>
        <h2 className="text-4xl font-extrabold">
          The Future is Here: Advance AI Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {[
            { title: "Tech Support", icon: "💻" },
            { title: "Robo Genius", icon: "🤖" },
            { title: "Image Generation", icon: "🖼" },
            { title: "Chatbots", icon: "💬" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-purple-400 bg-opacity-20 p-6 rounded-lg shadow-md"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-900 text-sm mt-2">
                To empower businesses with intelligent, scalable, and
                result-driven solutions in the digital progress.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Interaction Video Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            <img
              alt="A person interacting with a robot in a futuristic setting"
              className="w-full h-150 rounded-lg"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/toHjKDXwACkCYdL1kOqbBhASsjfGyVOCbEkcRY1b9Wk.jpg"
              width="800"
            />
            <a
              className="absolute inset-0 flex items-center justify-center"
              href="#"
            >
              <i className="fas fa-play-circle text-white text-6xl"></i>
            </a>
          </div>
        </div>
      </section>


      <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Future;
