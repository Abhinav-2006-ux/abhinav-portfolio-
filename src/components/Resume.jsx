import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
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
    <div className="resume-timeline-dot">
      <div className="resume-dot-inner"></div>
    </div>

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
    <section id="resume" className="section-padding bg-gray-50">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="resume-header-container"
        >
          <div className="resume-header-content">
            <h2 className="section-title">
              Resume
              <span className="title-underline"></span>
            </h2>
            <p className="skills-subtitle">
              My professional journey, education, and achievements.
            </p>
          </div>
        </motion.div>

        <div className="resume-grid">
          <div>
            <h3 className="resume-column-title">
              <Briefcase className="resume-column-icon" size={24} />
              Experience
            </h3>
            <div className="resume-column-wrapper">
              {experience.map((item, index) => (
                <ResumeItem key={`exp-${index}`} item={item} index={index} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="resume-column-title">
              <GraduationCap className="resume-column-icon" size={26} />
              Education
            </h3>
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
