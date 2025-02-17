const containerStyle = {
  width: '100%',
  height: '100%',
};

const GoogleMapBox = ({ center }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDVUsf7YSkTVJ5pbG5OZlBXrbrCUMD1dVQ&q=${center.lat},${center.lng}`;
  return (
    <iframe
      title="Google Map"
      src={src}
      style={{ width: '624px', height: '420px', marginRight: '175px', border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default GoogleMapBox;
