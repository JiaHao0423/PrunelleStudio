const containerStyle = {
  width: '46vw',
  height: '420px',
  marginRight: '13vw',
};

const GoogleMapBox = ({ center }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDVUsf7YSkTVJ5pbG5OZlBXrbrCUMD1dVQ&q=${center.lat},${center.lng}`;
  return <iframe title="Google Map" src={src} style={containerStyle} allowFullScreen loading="lazy" />;
};

export default GoogleMapBox;
