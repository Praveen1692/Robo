import React from "react";
import { motion } from "framer-motion";
import Robot from "../../public/Images/Robot.jpeg";

function Footer() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 md:py-28 bg-gradient-to-b from-black to-gray-900"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Column */}
        <motion.div className="z-10 w-full md:w-1/2 space-y-8" variants={itemVariants}>
          <div>
            <motion.p
              className="text-sm text-purple-400 uppercase tracking-widest font-semibold"
              variants={itemVariants}
            >
              GET STARTED
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
              variants={itemVariants}
            >
              Let's Make Something Great Together
            </motion.h1>
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full flex items-center font-semibold text-lg shadow-lg hover:shadow-purple-600/50"
              variants={buttonVariants}
              whileHover="hover"
            >
              Contact Us
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                transition={{ duration: 0.3 }}
                animate={{ x: [0, 5, 0] }}
                whileHover={{ x: 5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column - Robot Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-end relative"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src={Robot}
            alt="Purple Robot"
            className="max-w-full h-auto rounded-xl shadow-xl"
          />
          <motion.div
            className="absolute inset-0 bg-purple-600 opacity-0 rounded-xl"
            transition={{ duration: 0.3 }}
            whileHover={{ opacity: 0.1 }}
          />
        </motion.div>

        {/* Background "Robor" Text */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-5 pointer-events-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-extrabold text-gray-400 text-center">
            Robor
          </h1>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-auto bg-gradient-to-r from-purple-900 to-purple-700 rounded-t-3xl px-8 md:px-16 lg:px-24 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center space-x-3">
              <motion.div
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <span className="text-purple-600 text-lg font-bold">R</span>
              </motion.div>
              <h2 className="text-3xl font-extrabold text-white">Robor</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Data privacy and security are at the core of our operations, ensuring compliance with global standards like GDPR and HIPAA.
            </p>
            <div className="flex space-x-4">
              {[
                { color: "bg-blue-600", icon: "facebook" },
                { color: "bg-blue-400", icon: "twitter" },
                { color: "bg-red-600", icon: "youtube" },
                { color: "bg-blue-800", icon: "linkedin" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`${social.color} p-2 rounded-full`}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === "facebook" && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                    {social.icon === "twitter" && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.935 9.935 0 002.46-2.548l-.047-.02z" />
                    )}
                    {social.icon === "youtube" && (
                      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                    )}
                    {social.icon === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-bold text-white">Useful Links</h3>
            <ul className="space-y-3 text-gray-300">
              {["Home", "About Us", "Features", "Projects", "Blog"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5, transition: { duration: 0.3 } }}>
                  <a
                    href="#"
                    className="hover:text-purple-300 transition-colors duration-300 text-base"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-bold text-white">Company</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "What we Offer",
                "Our Story",
                "Latest Posts",
                "Help Center",
                "Our Partners",
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5, transition: { duration: 0.3 } }}>
                  <a
                    href="#"
                    className="hover:text-purple-300 transition-colors duration-300 text-base"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services & App Downloads */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Robotic Automation",
                  "Education & Science",
                  "Machine Learning",
                  "Predictive Analysis",
                  "Data Security",
                ].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5, transition: { duration: 0.3 } }}>
                    <a
                      href="#"
                      className="hover:text-purple-300 transition-colors duration-300 text-base"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Get The App</h3>
              <p className="text-gray-300 text-sm">We suggest connecting apps</p>
              <div className="flex flex-col space-y-3">
                {[
                  { store: "Google Play", icon: "play" },
                  { store: "App Store", icon: "apple" },
                ].map((app, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg px-4 py-3"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {app.icon === "play" && (
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                      )}
                      {app.icon === "apple" && (
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .78-3.31.76-1.33-.03-2.19-1.24-3-2.47C6 18.62 7.91 14.76 9.65 12.9c.87-.93 2-1.47 3.13-1.47 1 0 1.88.53 3.29.53 1.47 0 2.34-.57 3.24-1.53.34-.37.62-.8.88-1.24C17.5 9.25 16.25 8 14.65 8c-1.47 0-2.88 1-3.5 2-.62 1-1 2.5-1 2.5S9 11 8.47 10c-.87-.93-2.25-2.47-4-2.47C2.5 7.53 1 9.65 1 12.25c0 3.5 3.06 7.25 6.65 10.25 1.34 1.12 2.75 2 4.35 2 1.53 0 2.94-.88 4.35-2 1.66-1.38 3.06-3.5 3.06-5.5 0-1.47-.88-2.75-1.65-3z" />
                      )}
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">
                        {app.store === "Google Play" ? "GET IT ON" : "Download on the"}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {app.store}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;