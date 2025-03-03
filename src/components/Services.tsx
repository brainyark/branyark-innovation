import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Lightbulb, Users, BarChart, Globe, ArrowRight, Monitor } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
      className="card p-8 hover:border-blue-500 hover:border group"
    >
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Lightbulb size={28} />,
      title: 'Innovation Consulting',
      description: 'We help Kenyan businesses identify opportunities for innovation and develop strategies to implement cutting-edge solutions.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Digital Transformation',
      description: 'Transform your business with comprehensive digital solutions that enhance efficiency and drive growth in the African market.',
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Product Development',
      description: 'From concept to launch, we develop innovative products that solve real problems for African consumers and create value.',
    },
    {
      icon: <Users size={28} />,
      title: 'Team Augmentation',
      description: 'Enhance your team with our skilled Kenyan professionals to accelerate project delivery and bring fresh perspectives.',
    },
    {
      icon: <BarChart size={28} />,
      title: 'Data Analytics',
      description: 'Unlock insights from your data to make informed decisions and drive business growth across East Africa.',
    },
    {
      icon: <Monitor size={28} />,
      title: 'Website Development',
      description: 'Get a professional, responsive website like this one for your business. Contact us for custom web development services.',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions for Kenyan Businesses
          </h3>
          <p className="text-lg text-gray-700">
            We offer a wide range of services designed to help businesses in Kenya and East Africa innovate, grow, and succeed in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;