import DefaultLayout from '../components/layout/DefaultLayout';
import AboutUS from '../components/common/AboutUs';
import OrderFragrance from '../components/common/OrderFragrance';
import CustomerFeedback from '../components/common/CustomerFeedback';
import News from '../components/common/News';

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
