import React from "react";

function CaseStudy() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 relative z-10">
            <span className="text-gray-200 absolute top-[-4rem] left-1/2 -translate-x-1/2 text-[8rem] md:text-[10rem] font-bold leading-none opacity-30 select-none pointer-events-none">
              Case
            </span>
            <span className="text-sm text-purple-600 font-semibold uppercase tracking-wider block mb-2 animate-fade-in">
              Case Study
            </span>
            AI Projects Case Study
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            An AI agency is a specialized organization dedicated to helping businesses and organizations leverage artificial intelligence to achieve their goals.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Case Study 1 */}
          <div className="rounded-xl overflow-hidden shadow-xl group relative">
            <img
              src="https://storage.googleapis.com/a1aa/image/Sf45fEFJrFff-ctgs2cysi_GwvZIageJa8lrSNMDV4Y.jpg"
              alt="AI Robot Working"
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Case Study 2 */}
          <div className="rounded-xl overflow-hidden shadow-xl group relative">
            <img
              src="https://storage.googleapis.com/a1aa/image/mP0PHagkAxl8w9dfjFGpCRFcd9UJkDals5XW07ot-BY.jpg"
              alt="Speech Recognizer Using Deep Learning"
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs bg-purple-600 px-3 py-1 rounded-full font-medium uppercase tracking-wide">
                User Research
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-tight">
                Speech Recognizer Using Deep Learning
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudy;