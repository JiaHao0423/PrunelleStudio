import { useState } from 'react';
import '../../style/Carousel.css';
import Image1 from '../../images/News/News_image1.png';
import Image2 from '../../images/News/News_image2.png';
import Image3 from '../../images/News/News_image3.png';
import Image4 from '../../images/News/News_image4.png';
import Image5 from '../../images/News/News_image4.png';
import Image6 from '../../images/News/News_image4.png';
import Image7 from '../../images/News/News_image4.png';
import Image8 from '../../images/News/News_image4.png';
import Image9 from '../../images/News/News_image4.png';
import InstagramImage from '../../images/News/Instagram_image.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  const slides = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];
  return (
    <div className="carousel">
      <div className="carousel__images">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`carousel__image ${index === currentIndex ? 'carousel__image--active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={InstagramImage} alt="InstagramImage" className="carousel__image--instagram" />
            <img src={image} alt={`slide-${index}`} className="carousel__image--background" />
          </div>
        ))}
      </div>

      <div className="carousel__dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
