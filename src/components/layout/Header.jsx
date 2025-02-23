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
          <a href="#about" className="navbar__link">
            {`About us ${menuOpen ? '>' : ''}`}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#feedback" className="navbar__link">
            {`Customer feedback ${menuOpen ? '>' : ''}`}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#order" className="navbar__link">
            {`Order fragrance ${menuOpen ? '>' : ''}`}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#news" className="navbar__link">
            {`News ${menuOpen ? '>' : ''}`}
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link">
            {`Contact us ${menuOpen ? '>' : ''}`}
          </a>
        </li>
      </ul>
      <div className="navbar__tagline">專屬於你 獨一無二的香氣</div>
    </nav>
  );
};

export default Header;
