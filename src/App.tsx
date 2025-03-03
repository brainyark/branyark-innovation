import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ArrowRight, CheckCircle, Briefcase, Lightbulb, Users, BarChart, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Clients from './components/Clients';
import Preloader from './components/Preloader';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      <ToastContainer position="top-right" autoClose={5000} />
      <Navbar scrolled={scrolled} />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;