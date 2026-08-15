import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { personalDetails } from '../data';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Resume', to: 'resume' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <>
      <button 
        onClick={toggleMenu}
        className="mobile-menu-btn"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <div className="profile-img-wrapper">
            <img 
              src="/portrait_16x9.jpg" 
              alt={personalDetails.name} 
              className="profile-img"
            />
          </div>
          <h1 className="profile-name">{personalDetails.name}</h1>
          
          <div className="social-links">
            {personalDetails.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          &copy; {new Date().getFullYear()} {personalDetails.name}.<br/> All rights reserved.
        </div>
      </aside>
      
      {isOpen && (
        <div 
          className="mobile-overlay"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Sidebar;
