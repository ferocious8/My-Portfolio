import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-white p-2">
                  {/* Replace src with your actual company logo path once provided */}
                  <img
                    src="/src/assets/roc.logo.png"
                    alt="ROC.PH Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.backgroundColor = '#1f2937';
                    }}
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-400">
                      Fullstack WordPress Developer Intern & Junior Assistant Team Leader
                    </h3>
                    <span className="text-gray-400 mt-2 md:mt-0">March - May 2024</span>
                  </div>
                  <h4 className="text-xl text-gray-300 mb-4">ROC.PH</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Lead and mentor team members in WordPress development projects</li>
                    <li>Develop and maintain responsive WordPress websites using Elementor</li>
                    <li>Collaborate with clients to understand requirements and deliver solutions</li>
                    <li>Implement best practices for website optimization and performance</li>
                    <li>Troubleshoot and resolve technical issues in a timely manner</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
