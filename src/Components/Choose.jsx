import React from "react";

const MetaverseExperienceSection = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <p className="text-purple-400 uppercase tracking-widest font-semibold text-sm animate-fade-in">
                Why Choose Us
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-6"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Our goal is to build a world where technology serves humanity
              </h2>
            </div>

            <div className="relative group">
              <img
                src="https://storage.googleapis.com/a1aa/image/djhHyJR8cnM3LF6jWHzwExl1JhR6ClARG-Nc-dvxex0.jpg"
                alt="Futuristic metaverse VR robot humanoid with glowing face"
                className="rounded-xl w-full object-cover max-w-md shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            <div className="flex items-start mb-16">
              <div className="text-white text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
                24<span className="text-4xl md:text-6xl">+</span>
              </div>
              <div className="mt-4 ml-6">
                <h3 className="text-3xl font-bold text-gray-200">Years Of</h3>
                <h3 className="text-3xl font-bold text-gray-200">Experience</h3>
              </div>
            </div>

            <div className="space-y-10">
              {[
                { title: "Technology Integration", num: "01" },
                { title: "Certified Experts", num: "02" },
                { title: "Effortless Engagement", num: "03" },
                { title: "Future Vision And Mission", num: "04" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <div className="text-gray-500 font-bold text-2xl mr-4 group-hover:text-purple-400 transition-colors duration-300">
                    {feature.num}.
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-base leading-relaxed max-w-md">
                      We bring a team of experienced AI specialists, data scientists, and industry experts committed to pushing boundaries.
                    </p>
                  </div>
                </div>
              ))}

              {/* Circular Badge */}
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center group">
                <div className="absolute w-full h-full rounded-full bg-gray-900 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-32 h-32 rounded-full border-4 border-gray-700 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                      <div className="text-purple-400 text-3xl transform group-hover:rotate-45 transition-transform duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="textPath"
                      d="M50,15 a35,35 0 1,1 -0.1,0"
                      fill="none"
                      stroke="none"
                    />
                    <text fontSize="10" className="fill-gray-300">
                      <textPath href="#textPath" startOffset="0%">
                        INTEGRATION · BOSTON · AI · NEW · AUTOMATION
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Choose() {
  return <MetaverseExperienceSection />;
}

export default Choose;