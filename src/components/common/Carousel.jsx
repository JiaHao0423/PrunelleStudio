import { useState } from 'react';
import '../../style/Carousel.css';
import Image1 from '../../images/News/News_image1.png';
import Image2 from '../../images/News/News_image2.png';
import Image3 from '../../images/News/News_image3.png';
import Image4 from '../../images/News/News_image4.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  const slides = [Image1, Image2, Image3, Image4];
  return (
    <div className="carousel">
      <div className="carousel__images">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`carousel__image ${index === currentIndex ? 'carousel__image--active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} alt={`slide-${index}`} />
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
