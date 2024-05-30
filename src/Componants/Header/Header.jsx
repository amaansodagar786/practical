import React, { useState } from 'react';
import './Header.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/ReactJs_Practical_assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
              <li><a href='#'>About</a></li>
              <li><a href='#'>Services</a></li>
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
