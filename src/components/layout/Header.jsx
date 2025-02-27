import '../../style/Header.css';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar__hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className="navbar__brand">Prunelle Studio</div>
      <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        <li className="navbar__item">
          <a href="#about" className="navbar__link" onClick={toggleMenu}>
            About us
            {menuOpen && <span>&gt;</span>}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#feedback" className="navbar__link" onClick={toggleMenu}>
            Customer feedback
            {menuOpen && <span>&gt;</span>}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#order" className="navbar__link" onClick={toggleMenu}>
            Order fragrance
            {menuOpen && <span>&gt;</span>}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#news" className="navbar__link" onClick={toggleMenu}>
            News
            {menuOpen && <span>&gt;</span>}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link" onClick={toggleMenu}>
            Contact us
            {menuOpen && <span>&gt;</span>}
          </a>
        </li>
      </ul>
      <div className="navbar__tagline">專屬於你 獨一無二的香氣</div>
    </nav>
  );
};

export default Header;
