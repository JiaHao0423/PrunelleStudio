import DefaultLayout from '../components/layout/DefaultLayout';
import AboutUS from '../components/common/section/AboutUs';
import OrderFragrance from '../components/common/section/OrderFragrance';
import CustomerFeedback from '../components/common/section/CustomerFeedback';
import News from '../components/common/section/News';

const HomePage = () => {
  return (
    <DefaultLayout>
      <AboutUS />
      <OrderFragrance />
      <CustomerFeedback />
      <News />
    </DefaultLayout>
  );
};

export default HomePage;
