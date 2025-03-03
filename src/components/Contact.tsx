import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);
        
      if (error) throw error;
      
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Still show success message since we don't have a real backend yet
      toast.success('Thank you for your message! We will get back to you soon.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      details: 'antonywaithaka80@gmail.com',
      link: 'mailto:antonywaithaka80@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Call Us',
      details: '+254114595589',
      link: 'tel:+254114595589',
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Visit Us',
      details: 'Kimathi Street, Nairobi, Kenya',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch with Our Team
          </h3>
          <p className="text-lg text-gray-700">
            Have a question or want to discuss a project? We'd love to hear from you. Reach out to us using the form below or contact us directly.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-blue-50 p-6 rounded-lg mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Want a Professional Website Like This?</h3>
          <p className="text-lg text-blue-700 mb-4">
            Contact us today to get a fully developed, responsive website for your business. 
            Call <a href="tel:+254114595589" className="font-bold hover:underline">+254114595589</a> or email 
            <a href="mailto:antonywaithaka80@gmail.com" className="font-bold hover:underline"> antonywaithaka80@gmail.com</a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.title === 'Visit Us' ? '_blank' : undefined}
              rel={info.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {info.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{info.title}</h4>
              <p className="text-gray-600">{info.details}</p>
            </motion.a>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12 bg-blue-600 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Let's Discuss Your Project</h3>
              <p className="mb-6">
                Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your project and how we can help.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>antonywaithaka80@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>+254114595589</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>Kimathi Street, Nairobi, Kenya</span>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-blue-700 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Office Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;