"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative w-full 
        flex flex-col md:flex-row 
        items-center 
        pt-20 
        gap-10 
        bg-white 
        min-h-screen 
        z-0
        overflow-hidden
      "
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-auto"
      >
        <div
          className="
            flex-1 z-10 
            ml-4 sm:ml-6 md:ml-10 
            px-4 md:px-0 
            text-center md:text-left
          "
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Lorem ipsum dolor sit amet
          </h1>

          <p className="text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
            sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
            imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
            Nunc euismod ultrices etiam nulla habitasse.
          </p>

          <div
            className="
              flex flex-col sm:flex-row 
              gap-2 mb-4 
              justify-center md:justify-start
            "
          >
            <input
              type="text"
              placeholder="Enter email"
              className="border px-4 py-2 rounded-md w-full sm:w-64"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">
              Submit →
            </button>
          </div>

          <div
            className="
              flex items-center gap-2 
              justify-center md:justify-start
            "
          >
            <input type="checkbox" className="w-5 h-5 accent-blue-600" />
            <span className="text-sm text-gray-600 font-medium">
              No credit card required!
            </span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          flex-1 
          relative 
          w-full 
          h-[300px] sm:h-[400px] md:h-screen 
          -mt-4 md:-mt-20
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cover.png')",
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
