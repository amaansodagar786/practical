import React, { useState } from 'react';
import './Header.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/ReactJs_Practical_assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <>
      <nav className='mainnav'>
        <div className='mainheader'>
          <div className='logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='navlinks'>
            <ul className={menuOpen ? 'nav-active' : ''}>
              <li><a href='#'>Home</a></li>
              <li>
                <a href='#' onClick={toggleAboutDropdown}>About</a>
                {aboutDropdownOpen && (
                  <ul className='dropdown'>
                    <li><a href='#'>Our Story</a></li>
                    <li><a href='#'>Our Team</a></li>
                    <li><a href='#'>Careers</a></li>
                  </ul>
                )}
              </li>
              <li>
                <a href='#' onClick={toggleServicesDropdown}>Services</a>
                {servicesDropdownOpen && (
                  <ul className='dropdown'>
                    <li><a href='#'>Consulting</a></li>
                    <li><a href='#'>Development</a></li>
                    <li><a href='#'>Design</a></li>
                  </ul>
                )}
              </li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Partners</a></li>
              <li><a href='#'>News</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
          <div className='menu-icon' onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
