import '../../style/News.css';
import Carousel from './Carousel';

const News = () => {
  return (
    <section className="news">
      <header className="news__header">
        <h2 className="news__title">News</h2>
        <p className="news__subtitle">最新消息</p>
      </header>
      <div className="news__carousel">
        <Carousel />
      </div>
    </section>
  );
};

export default News;
