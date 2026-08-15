import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header-center"
        >
          <h2 className="section-title">
            Testimonials
            <span className="title-underline title-underline-center"></span>
          </h2>
          <p className="skills-subtitle">
            What people say about working with me.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <Quote size={40} className="testimonial-quote-icon" />
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "{testimonial.quote}"
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
