import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { personalDetails } from '../data';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ backgroundImage: 'url("/portrait_16x9.jpg")' }}
    >
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <h1 className="hero-title">
          {personalDetails.name}
        </h1>
        <p className="hero-subtitle">
          I'm a{' '}
          <span className="hero-typing">
            <Typewriter
              words={['Developer.', 'Designer.', 'Creator.', 'Problem Solver.']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
