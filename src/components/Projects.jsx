import React from 'react';
import { motion } from 'framer-motion';
import aeroDropImg from '../assets/aerodrop-screenshot.jpg';
import paymateImg from '../assets/paymate-screenshot.jpg';
import vogueImg from '../assets/vogue-screenshot.jpg';
import panlasangPinoyImg from '../assets/panlasang-pinoy.jpg.png';
import privateResortImg from '../assets/private-resort-screenshot.jpg';

const projects = [
  {
    title: "Panlasang Pinoy",
    description: "A Filipino recipe website showcasing various traditional and modern Filipino dishes.",
    link: "https://ferocious8.github.io/panlasang-pinoy/#/",
    image: panlasangPinoyImg,
    tech: ["React", "Tailwind CSS", "GitHub Pages"],
    github: "https://github.com/ferocious8/panlasang-pinoy"
  },
  {
    title: "PayMate",
    description: "A modern payment solution platform with intuitive user interface and seamless transaction processing.",
    link: "http://paymate.liveblog365.com/?i=1",
    image: paymateImg,
    tech: ["WordPress", "Elementor", "PHP", "CSS"],
    github: null
  },
  {
    title: "Vogue Hair Salon",
    description: "A professional website for a hair salon featuring appointment booking and service showcase.",
    link: "http://voguehairsalon.liveblog365.com/?i=1",
    image: vogueImg,
    tech: ["WordPress", "Elementor", "JavaScript", "CSS"],
    github: null
  },
  {
    title: "AeroDrop",
    description: "An innovative web application with modern design and responsive interface.",
    link: "https://ferocious8.github.io/aerodrop/",
    image: aeroDropImg,
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/ferocious8/aerodrop"
  },
  {
    title: "Private Resort",
    description: "A modern resort booking website with an elegant design and seamless user experience.",
    link: "https://ferocious8.github.io/private-resort/#/",
    image: privateResortImg,
    tech: ["React", "Tailwind CSS", "GitHub Pages"],
    github: "https://github.com/ferocious8/private-resort"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative group">
                <div className="aspect-video overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.backgroundColor = '#1f2937';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center space-y-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 w-full text-center"
                      >
                        View Live Demo
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 w-full text-center flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
