import React from 'react';
import { motion } from 'framer-motion';
import aeroDropImg from '../assets/aerodrop-screenshot.jpg';
import paymateImg from '../assets/paymate-screenshot.jpg';
import vogueImg from '../assets/vogue-screenshot.jpg';

const projects = [
  {
    title: "PayMate",
    description: "A modern payment solution platform with intuitive user interface and seamless transaction processing.",
    link: "http://paymate.liveblog365.com/?i=1",
    image: paymateImg,
    tech: ["WordPress", "Elementor", "PHP", "CSS"]
  },
  {
    title: "Vogue Hair Salon",
    description: "A professional website for a hair salon featuring appointment booking and service showcase.",
    link: "http://voguehairsalon.liveblog365.com/?i=1",
    image: vogueImg,
    tech: ["WordPress", "Elementor", "JavaScript", "CSS"]
  },
  {
    title: "AeroDrop",
    description: "An innovative web application with modern design and responsive interface.",
    link: "https://ferocious8.github.io/aerodrop/",
    image: aeroDropImg,
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">My Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative group">
                  <div className="aspect-video overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.backgroundColor = '#1f2937';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full text-center">
                      <span className="inline-flex items-center text-white">
                        View Project
                        <svg
                          className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
