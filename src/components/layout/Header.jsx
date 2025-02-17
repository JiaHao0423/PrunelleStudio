import '../../style/Header.css';

const Header = () => {
  return (
    <nav class="navbar">
      <div class="navbar__brand">Prunelle Studio</div>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a href="#about" class="navbar__link">
            About us
          </a>
        </li>
        <li class="navbar__item">
          <a href="#feedback" class="navbar__link">
            Customer feedback
          </a>
        </li>
        <li class="navbar__item">
          <a href="#order" class="navbar__link">
            Order fragrance
          </a>
        </li>
        <li class="navbar__item">
          <a href="#news" class="navbar__link">
            News
          </a>
        </li>
        <li class="navbar__item">
          <a href="#contact" class="navbar__link">
            Contact us
          </a>
        </li>
      </ul>
      <div class="navbar__tagline">專屬於你 獨一無二的香氣</div>
    </nav>
  );
};

export default Header;
