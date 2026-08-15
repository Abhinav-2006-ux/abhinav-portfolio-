import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About
            <span className="title-underline"></span>
          </h2>
          <p className="about-description">
            {personalDetails.about}
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/portrait_16x9.jpg" 
              alt="About Me" 
              className="about-image" 
            />
          </motion.div>

          <motion.div 
            className="about-content-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about-role">{personalDetails.title}</h3>
            <p className="about-tagline">
              {personalDetails.tagline}
            </p>
            
            <div className="about-info-grid">
              <ul className="info-list">
                <li className="info-item">
                  <ChevronRight size={18} className="info-icon" />
                  <strong>Location:</strong> <span>{personalDetails.location}</span>
                </li>
                <li className="info-item">
                  <ChevronRight size={18} className="info-icon" />
                  <strong>Email:</strong> <span>{personalDetails.email}</span>
                </li>
              </ul>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
