import '../../style/Footer.css';

const GoogleMapBox = ({ center }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDVUsf7YSkTVJ5pbG5OZlBXrbrCUMD1dVQ&q=${center.lat},${center.lng}`;
  return <iframe title="Google Map" src={src} className="footer__map" allowFullScreen loading="lazy" />;
};

export default GoogleMapBox;
