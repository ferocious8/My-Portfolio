import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:w-1/2"
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 absolute -top-4 left-0"
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Gerenz R. Mendoza
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300"
              >
                Computer Engineer
              </motion.h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75"></div>
              <a
                href="#contact"
                className="relative bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full inline-block transition duration-300 border border-blue-500/20"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-80 md:w-[30rem] flex-shrink-0"
          >
            <div className="relative">
              <div className="w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1.5">
                <div className="rounded-3xl overflow-hidden bg-gray-900">
                  <img
                    src="/src/assets/profile.png"
                    alt="Gerenz R. Mendoza"
                    className="w-full h-full object-contain object-center"
                    style={{ maxHeight: 'calc(100vh - 200px)' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.backgroundColor = '#1f2937';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
