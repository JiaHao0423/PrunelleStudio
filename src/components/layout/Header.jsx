import '../../style/Header.css';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = () => {
    if (isMobile) toggleMenu();
  };

  const HeaderItem = [
    { href: '#about', label: 'About us' },
    { href: '#customer-feedback', label: 'Customer feedback' },
    { href: '#order-fragrance', label: 'Order fragrance' },
    { href: '#news', label: 'News' },
    { href: '#footer', label: 'Contact us' },
  ];

  return (
    <nav className="navbar">
      <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
      <div className="navbar__brand">Prunelle Studio</div>
      <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        {HeaderItem.map(({ href, label }) => (
          <li className="navbar__item" key={href}>
            <a href={href} className="navbar__link" onClick={handleLinkClick}>
              {label}
              {menuOpen && <span>&gt;</span>}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar__tagline">專屬於你 獨一無二的香氣</div>
    </nav>
  );
};

export default Header;
