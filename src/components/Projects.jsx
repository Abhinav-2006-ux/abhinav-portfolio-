import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header-center"
        >
          <h2 className="section-title">
            Projects
            <span className="title-underline title-underline-center"></span>
          </h2>
          <p className="skills-subtitle projects-subtitle">
            A selection of my recent work, showcasing solutions to complex problems.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn demo-btn"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn github-btn"
                    title="Source Code"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-details">
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Impact:</strong> {project.impact}</p>
                </div>
                <div className="project-tags">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="project-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
