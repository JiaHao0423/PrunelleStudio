import '../../../style/CustomerFeedback.css';
import AvatarImage1 from '../../../images/CustomerFeedbackBack/CustomerFeedbackAvatar1.png';
import AvatarImage2 from '../../../images/CustomerFeedbackBack/CustomerFeedbackAvatar2.png';

const FeedbackItem = ({ avatar, subtitle, text }) => (
  <article className="customer-feedback__item">
    <div className="customer-feedback__user">
      <div className="customer-feedback__info">
        <span className="customer-feedback__stars">★★★★★</span>
        <img className="customer-feedback__avatar" src={avatar} alt="User Avatar" />
      </div>
      <p className="customer-feedback__subtitle">{subtitle}</p>
    </div>
    <p className="customer-feedback__text">{text}</p>
  </article>
);

const CustomerFeedbackList = () => {
  const feedbacks = [
    {
      avatar: AvatarImage1,
      subtitle: '專屬我自己的香味 :',
      text: '在噴上為我量身打造的香氣後，讓我覺得「想要讓自己成為配得上這樣香氣的女性」。市面上雖然也有很多不錯的香水，但那種「這是專門為我所製作的」的特別感是市售的香水無法比擬的，很高興能遇到這麼棒的香味。',
    },
    {
      avatar: AvatarImage2,
      subtitle: '訂製給朋友的禮物 :',
      text: '作為朋友的生日禮物而購買了這款香水。雖然送出去了，但因為自己沒有先確認香味，對香氣的類型有些擔心。然而，過沒幾天後香水店寄來一封信，信上寫著「如果方便的話，希望您能與收禮者一起體驗這款香水」，並附上了香水的試用品。這樣貼心的舉動讓我非常感動。下次我也想在這裡購買一瓶屬於自己的香水。',
    },
  ];

  return (
    <div className="customer-feedback__list">
      {feedbacks.map((feedback, index) => (
        <FeedbackItem key={index} {...feedback} />
      ))}
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <section className="customer-feedback">
      <div className="customer-feedback__container">
        <div className="customer-feedback__header">
          <h2 className="customer-feedback__title">Customer Feedback</h2>
        </div>
        <div className="customer-feedback__list">
          <CustomerFeedbackList />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
