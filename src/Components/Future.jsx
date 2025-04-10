import React, { useState } from "react";
import { FaPlus, FaMinus, FaPlayCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is an AI startup, and what services do you offer?",
    answer:
      "An AI Software as a Service startup combines the scalability of cloud-based platforms with the power of artificial intelligence to deliver innovative on-demand solutions. These startups cater to a wide range of industries by offering AI-driven tools and applications that solve specific business challenges, enhance efficiency, and drive data-informed decisions. The AI industry is rapidly expanding, with opportunities to disrupt traditional industries and create entirely new markets. Continuous advancements in hardware and algorithms position AI startups to play a pivotal role in shaping the future.",
  },
  {
    question:
      "Do you offer pre-built AI models or create everything from scratch?",
    answer:
      "We provide both pre-built AI models and custom-built solutions tailored to specific business needs.",
  },
  {
    question:
      "What is the process for developing an AI solution for my business?",
    answer:
      "Our process includes consultation, data collection, model development, testing, and deployment to ensure a seamless AI solution.",
  },
  {
    question: "How do you ensure data privacy and compliance with regulations?",
    answer:
      "We follow strict data security protocols and adhere to industry regulations to ensure privacy and compliance.",
  },
];

function Future() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white py-20 px-4 md:px-16 lg:px-24 text-center">
        <h3 className="text-sm text-purple-300 uppercase tracking-widest font-semibold animate-fade-in">
          Advanced Technology
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          The Future is Here: Advance AI Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            { title: "Tech Support", icon: "💻" },
            { title: "Robo Genius", icon: "🤖" },
            { title: "Image Generation", icon: "🖼" },
            { title: "Chatbots", icon: "💬" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-purple-800 bg-opacity-30 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                To empower businesses with intelligent, scalable, and result-driven solutions in the digital progress.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Interaction Video Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative group">
            <img
              alt="A person interacting with a robot in a futuristic setting"
              className="w-full h-96 rounded-xl object-cover shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
              src="https://storage.googleapis.com/a1aa/image/toHjKDXwACkCYdL1kOqbBhASsjfGyVOCbEkcRY1b9Wk.jpg"
            />
            <a
              className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300"
              href="#"
            >
              <FaPlayCircle className="text-white text-6xl md:text-8xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                <span className="text-purple-600">
                  {openIndex === index ? (
                    <FaMinus className="w-5 h-5" />
                  ) : (
                    <FaPlus className="w-5 h-5" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-gray-700 text-base leading-relaxed border-t border-gray-200 animate-slide-down">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Future;