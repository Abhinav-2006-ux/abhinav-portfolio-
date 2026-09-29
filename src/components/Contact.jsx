import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent (simulated).`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header-center"
        >
          <h2 className="section-title">
            Contact
            <span className="title-underline title-underline-center"></span>
          </h2>
          <p className="skills-subtitle">
            Let's build something awesome together.
          </p>
        </motion.div>

        <div className="contact-info-centered">
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card">
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-desc">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              </p>
              
              <div className="contact-email-box">
                <div className="contact-email-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="contact-email-label">Email Me At</p>
                  <a href={`mailto:${personalDetails.email}`} className="contact-email-link">
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              <div className="contact-socials-container">
                <p className="contact-socials-label">Follow Me</p>
                <div className="contact-socials-list">
                  {personalDetails.socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={index} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-social-icon"
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
