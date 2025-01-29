import React from 'react';
import { motion } from 'framer-motion';
import togaImg from '../assets/toga.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center gap-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={togaImg}
                alt="Gerenz R. Mendoza - Graduation"
                className="w-full h-full object-contain bg-gray-900"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.backgroundColor = '#1f2937';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-lg font-semibold text-white">Bachelor's Degree in Computer Engineering</p>
                <p className="text-gray-300">Class of 2024</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">About Me</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I am a fresh Computer Engineering graduate with a passion for creating innovative software solutions. 
                My journey in technology has equipped me with a diverse skill set in both software development and 
                network infrastructure.
              </p>
              <p className="text-lg text-gray-300">
                During my academic career, I've developed strong foundations in Python, Java, HTML, CSS, and specialized 
                in WordPress development using Elementor. My experience extends to Cisco networking, allowing me to 
                understand both the development and infrastructure aspects of technology solutions.
              </p>
              <p className="text-lg text-gray-300">
                Currently, I'm working as a Fullstack WordPress Developer Intern and Junior Assistant Team Leader at ROC.PH, 
                where I'm gaining hands-on experience in real-world project development and team leadership.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
