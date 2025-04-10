import React from "react";

function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 relative z-10">
          <span className="text-gray-300 absolute top-[-4rem] left-1/2 -translate-x-1/2 text-[8rem] md:text-[10rem] font-bold leading-none opacity-30 select-none pointer-events-none">
            Testimonials
          </span>
          <span className="text-sm text-purple-600 font-semibold uppercase tracking-wider block mb-2 animate-fade-in">
            Testimonials
          </span>
          What Our Clients Say About Us
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Testimonials Column */}
        <div className="space-y-8">
          {[
            {
              name: "Michael Lacefield",
              role: "Co-founder, XYZ",
              image: "https://storage.googleapis.com/a1aa/image/cswLX_l0hxPvIuJeidqvM2-WyH_H5GFNN3wXSzYlowM.jpg",
              text: "Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit.",
            },
            {
              name: "Michael Lacefield",
              role: "Co-founder, XYZ",
              image: "https://storage.googleapis.com/a1aa/image/cswLX_l0hxPvIuJeidqvM2-WyH_H5GFNN3wXSzYlowM.jpg",
              text: "Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl p-6 flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-purple-100 group-hover:border-purple-300 transition-colors duration-300"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Column */}
        <div className="relative group rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D0yfCTEH-o3gPOX--qDepEriIqKYRB_cLg&s"
            alt="AI Robot"
            className="w-full h-[28rem] object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-3">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === 0
                ? "bg-purple-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;