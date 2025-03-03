import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-tl-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="About BrainyArk Innovation"
              className="rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-br-3xl opacity-20"></div>
            
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pioneering Innovation in Kenya Since 2020
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
              BrainyArk Innovation is a forward-thinking Kenyan technology company dedicated to transforming businesses through innovative solutions. We combine creativity, technical expertise, and strategic thinking to help our clients navigate the digital landscape and achieve their goals.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
              Our team of experts brings diverse skills and perspectives to every project, ensuring comprehensive solutions that address complex challenges and drive meaningful results for businesses across East Africa.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h4>
              <ul className="space-y-3">
                {[
                  'African-led innovation and local expertise',
                  'Dedicated team of industry professionals',
                  'Commitment to excellence and quality',
                  'Client-centered focus and collaboration',
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <a 
                href="#services" 
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
              >
                Discover Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;