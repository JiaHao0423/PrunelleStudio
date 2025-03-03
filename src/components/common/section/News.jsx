import '../../../style/News.css';
import Carousel from '../Carousel';

const News = () => {
  return (
    <section className="news" id="news">
      <header className="news__header">
        <h2 className="news__title">News</h2>
        <p className="news__subtitle">最新消息</p>
      </header>
      <Carousel />
    </section>
  );
};

export default News;
