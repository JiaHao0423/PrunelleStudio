import InstagramImage from '../../images/Instagram_image.png';
import LineImage from '../../images/Line_image.png';
import '../../style/Footer.css';
import { Link } from 'react-router-dom';
import GoogleMapBox from '../common/GoogleBox';

const MapCenter = {
  lat: 24.965933568771415,
  lng: 121.29711208650915,
};

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__content">
        <div class="footer__contact">
          <h3 class="footer__title">•聯絡我們</h3>
          <div class="footer__icons">
            <Link class="footer__icon footer__icon--instagram" to="/home">
              <img src={InstagramImage} alt="" />
            </Link>
            <Link class="footer__icon footer__icon--line" to="/home">
              <img src={LineImage} alt="" />
            </Link>
          </div>
        </div>
        <div class="footer__address">
          <p class="footer__text">地址：334 桃園市八德區廣豐二街30號</p>
          <p class="footer__email">Email: Prunellefragrance@gmail.com</p>
        </div>
      </div>
      <div class="footer__map-container">
        <GoogleMapBox center={MapCenter} />
      </div>
      <div class="footer__copyright">版權所有 © Prunellefragrance.2025</div>
    </footer>
  );
};

export default Footer;
