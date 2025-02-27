import AboutImage from '../../../images/About_image.png';
import '../../../style/AoutUs.css';

const AboutUS = () => {
  return (
    <section className="about">
      <img src={AboutImage} alt="AboutImage" className="about__image" />

      <div className="about__content">
        <div className="about__titles">
          <h2 className="about__title">About Us</h2>
          <h3 className="about__subtitle">品牌理念</h3>
        </div>
        <p className="about__description">
          坐落台北的某個寧靜小巷弄內，期望能在這個快節奏的城市中，帶給顧客專屬的個人香氛，讓香氣成為心靈的避風港，為生活注入一絲溫暖與寧靜。
          <br />
          我們精選天然成分，結合工匠精神，為顧客呈現每一款獨特且富有故事的香氛產品，喚起對美好生活的嚮往與細緻體驗。
        </p>
      </div>
    </section>
  );
};

export default AboutUS;
