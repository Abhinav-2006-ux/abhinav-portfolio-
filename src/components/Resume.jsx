import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data';
import './Resume.css';

const ResumeItem = ({ item, index }) => (
  <motion.div 
    className="resume-item-container group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="resume-timeline-line group-last:h-full group-last:bottom-auto"></div>
    <div className="resume-timeline-dot"></div>

    <div className="resume-item-content">
      <div className="resume-date">
        {item.date}
      </div>
      <div className="resume-card">
        <h3 className="resume-card-title">{item.title}</h3>
        <h4 className="resume-card-org">{item.organization}</h4>
        <ul className="resume-bullet-list">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="resume-bullet">{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Resume = () => {
  const education = experienceData.filter(item => item.type === 'education');
  const experience = experienceData.filter(item => item.type === 'experience');

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header-center"
        >
          <h2 className="section-title">
            Resume
            <span className="title-underline title-underline-center"></span>
          </h2>
          <p className="skills-subtitle">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="resume-grid">
          <div>
            <h3 className="resume-column-title">Experience</h3>
            <div className="resume-column-wrapper">
              {experience.map((item, index) => (
                <ResumeItem key={`exp-${index}`} item={item} index={index} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="resume-column-title">Education</h3>
            <div className="resume-column-wrapper">
              {education.map((item, index) => (
                <ResumeItem key={`edu-${index}`} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
