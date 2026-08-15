import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header-center"
        >
          <h2 className="section-title">
            Skills
            <span className="title-underline title-underline-center"></span>
          </h2>
          <p className="skills-subtitle">
            A look at my technical expertise and professional skills.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-item"
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level-text">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <motion.div 
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
