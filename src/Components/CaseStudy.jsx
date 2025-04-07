import React from "react";

function CaseStudy() {
  return (
    <div>
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-extrabold text-gray-900 relative z-10">
            <span className="text-gray-200 absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] font-bold leading-none opacity-40">
              Case
            </span>
            <span className="text-sm text-purple-600 font-semibold uppercase block">
              Case Study
            </span>
            AI Projects Case Study
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            An AI agency is a specialized organization dedicated to helping
            businesses and organizations leverage artificial intelligence to
            achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://storage.googleapis.com/a1aa/image/Sf45fEFJrFff-ctgs2cysi_GwvZIageJa8lrSNMDV4Y.jpg"
              alt="AI Robot Working"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg relative">
            <img
              src="https://storage.googleapis.com/a1aa/image/mP0PHagkAxl8w9dfjFGpCRFcd9UJkDals5XW07ot-BY.jpg"
              alt="Speech Recognizer Using Deep Learning"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 text-white w-full">
              <span className="text-sm bg-gray-800 px-2 py-1 rounded-md">
                User Research
              </span>
              <h3 className="mt-2 text-lg font-semibold">
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
