import React from "react";

function Testimionals() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="text-center mb-12 relative">
        <h2 className="text-5xl font-extrabold text-gray-900 relative z-10">
          <span className="text-gray-200 absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] font-bold leading-none opacity-40">
            Testimonials
          </span>
          <span className="text-sm text-purple-600 font-semibold uppercase block">
            Testimonials
          </span>
          What Our Clients Say About Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <p className="mt-4 text-gray-600">
              "Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi.
              Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae
              non cum sit."
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/cswLX_l0hxPvIuJeidqvM2-WyH_H5GFNN3wXSzYlowM.jpg"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-gray-900">Michael Lacefield</p>
                <p className="text-gray-500 text-sm">Co-founder, XYZ</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <p className="mt-4 text-gray-600">
              "Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi.
              Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae
              non cum sit."
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/cswLX_l0hxPvIuJeidqvM2-WyH_H5GFNN3wXSzYlowM.jpg"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-gray-900">Michael Lacefield</p>
                <p className="text-gray-500 text-sm">Co-founder, XYZ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D0yfCTEH-o3gPOX--qDepEriIqKYRB_cLg&s"
            alt="AI Robot"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <button className="w-3 h-3 bg-black rounded-full"></button>
        <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
        <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
        <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
        <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
      </div>
    </section>
  );
}

export default Testimionals;
