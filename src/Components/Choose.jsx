import React from 'react'


const MetaverseExperienceSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-500 uppercase tracking-wider font-semibold mb-2">Why Choose Us</p>
              <div className="w-16 h-1 bg-purple-500 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Our goal is to build a world where technology serves humanity.
              </h2>
            </div>
            
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/a1aa/image/djhHyJR8cnM3LF6jWHzwExl1JhR6ClARG-Nc-dvxex0.jpg" 
                alt="Futuristic metaverse VR robot humanoid with glowing face" 
                className="rounded-lg w-full object-cover max-w-md"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col justify-between">
            <div className="flex items-start mb-12">
              <div className="text-white text-6xl md:text-8xl font-bold">24<span className="text-4xl md:text-6xl">+</span></div>
              <div className="mt-6 ml-4">
                <h3 className="text-2xl font-bold">Years Of</h3>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
            </div>
            
            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="text-gray-500 font-bold text-xl mr-4">01.</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Technology Integration</h4>
                  <p className="text-gray-400 text-sm">
                    We bring a team of experienced AI specialists, data scientists, and industry
                    experts committed to pushing boundaries.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="text-gray-500 font-bold text-xl mr-4">02.</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Certified Experts</h4>
                  <p className="text-gray-400 text-sm">
                    We bring a team of experienced AI specialists, data scientists, and industry
                    experts committed to pushing boundaries.
                  </p>
                </div>
              </div>
              
              {/* Circular Badge */}
              <div className="relative w-50 h-50 flex items-center justify-center">
      {/* Outer circle with dark background */}
      <div className="absolute w-full h-full rounded-full bg-black flex items-center justify-center">
        {/* Inner circle (gray ring) */}
        <div className="w-50 h-50 rounded-full border-22 border-gray-700 flex items-center justify-center">
          {/* Center circle (black) */}
          <div className="w-3/4 h-3/4 rounded-full bg-black flex items-center justify-center">
            {/* Arrow */}
            <div className="text-white text-2xl">
              <span className="transform rotate-0">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Circular text */}
      <div className="absolute w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="textPath"
            d="M50,15 a35,35 0 1,1 -0.1,0"
            fill="none"
            stroke="none"
          />
          <text fontSize="10" className=" fill-white ">
            <textPath href="#textPath" startOffset="0%">
              INTEGRATION · BOSTON · AI · NEW · AUTOMATION
            </textPath>
          </text>
        </svg>
      </div>
    </div>



              
              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="text-gray-500 font-bold text-xl mr-4">03.</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Effortless Engagement</h4>
                  <p className="text-gray-400 text-sm">
                    We bring a team of experienced AI specialists, data scientists, and industry
                    experts committed to pushing boundaries.
                  </p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="flex items-start">
                <div className="text-gray-500 font-bold text-xl mr-4">04.</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Future Vision And Mission</h4>
                  <p className="text-gray-400 text-sm">
                    We bring a team of experienced AI specialists, data scientists, and industry
                    experts committed to pushing boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom CSS for rotating text in a circle
const styles = `
  .rotate-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  
  .rotate-circle span {
    position: absolute;
    left: 50%;
    top: 0;
    transform-origin: 0 100%;
  }
  
  .rotate-315 { transform: rotate(-45deg) translateX(-50%); }
  .rotate-330 { transform: rotate(-30deg) translateX(-50%); }
  .rotate-345 { transform: rotate(-15deg) translateX(-50%); }
  .rotate-0 { transform: rotate(0deg) translateX(-50%); }
  .rotate-15 { transform: rotate(15deg) translateX(-50%); }
  .rotate-30 { transform: rotate(30deg) translateX(-50%); }
  .rotate-45 { transform: rotate(45deg) translateX(-50%); }
  .rotate-60 { transform: rotate(60deg) translateX(-50%); }
  .rotate-75 { transform: rotate(75deg) translateX(-50%); }
  .rotate-90 { transform: rotate(90deg) translateX(-50%); }
`;





function Choose() {
  return (
    <div>
      <style>{styles}</style>
      <MetaverseExperienceSection />
    </div>
  )
}

export default Choose