import '../../style/OrderFragrance.css';
import OrderFragranceImage1 from '../../images/OrderFragrance/OrderFragrance_image1.png';
import OrderFragranceImage2 from '../../images/OrderFragrance/OrderFragrance_image2.png';
import OrderFragranceImage3 from '../../images/OrderFragrance/OrderFragrance_image3.png';
import OrderFragranceImage4 from '../../images/OrderFragrance/OrderFragrance_image4.png';

const steps = [
  { img: OrderFragranceImage1, text: '1. 選擇喜歡的香調' },
  { img: OrderFragranceImage2, text: '2. 測試香調的搭配' },
  { img: OrderFragranceImage3, text: '3. 調配屬於你的香氣' },
  { img: OrderFragranceImage4, text: '4. 為你的香味命名，貼上專屬你香味的名稱' },
];

const OrderFragrance = () => {
  return (
    <section class="order-fragrance">
      <header class="order-fragrance__header">
        <h2 class="order-fragrance__title">Order fragrance</h2>
        <h3 class="order-fragrance__subtitle">打造專屬於你的個人香水</h3>
      </header>

      <h2 class="order-fragrance__steps-title">製作步驟</h2>

      <ol class="order-fragrance__steps">
        {steps.map((step, index) => (
          <li key={index} className="order-fragrance__step">
            <img src={step.img} alt={`步驟 ${index + 1}`} className="order-fragrance__step-image" />
            <p className="order-fragrance__step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default OrderFragrance;
