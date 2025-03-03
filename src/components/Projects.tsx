import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Smart City Infrastructure for Nairobi',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      description: 'Developing intelligent infrastructure solutions for modern urban environments in Kenya.',
    },
    {
      id: 2,
      title: 'M-Pesa Integration Platform',
      category: 'Product Development',
      image: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      description: 'A comprehensive mobile payment integration system with advanced security features for Kenyan businesses.',
    },
    {
      id: 3,
      title: 'Healthcare Analytics for East Africa',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      description: 'Powerful analytics tools for healthcare providers across East Africa to improve patient outcomes.',
    },
    {
      id: 4,
      title: 'E-Commerce Platform for Local Artisans',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      description: 'Complete digital transformation enabling Kenyan artisans to sell their crafts globally.',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Innovation', 'Product Development', 'Data Analytics', 'Digital Transformation'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Our Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Innovative Solutions We've Delivered
          </h3>
          <p className="text-lg text-gray-700">
            Explore our portfolio of successful projects that have helped Kenyan businesses transform and grow.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-sm text-blue-300 font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;