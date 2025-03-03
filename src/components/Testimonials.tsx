import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Wanjiku Kamau',
      position: 'CEO',
      company: 'TechForward Kenya',
      image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: "BrainyArk Innovation transformed our business with their innovative solutions. Their team's expertise and dedication to excellence exceeded our expectations.",
    },
    {
      id: 2,
      name: 'David Ochieng',
      position: 'CTO',
      company: 'GlobalConnect East Africa',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: "Working with BrainyArk was a game-changer for our company. Their strategic approach and technical expertise helped us achieve our digital transformation goals.",
    },
    {
      id: 3,
      name: 'Amina Mohammed',
      position: 'Marketing Director',
      company: 'InnovateNow Nairobi',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: "The team at BrainyArk Innovation delivered exceptional results. Their creativity and attention to detail made our project a success.",
    },
  ];

  return (
    <section className="section-padding bg-blue-600 text-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h3>
          <p className="text-lg text-blue-100">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with BrainyArk Innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 text-gray-800 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;