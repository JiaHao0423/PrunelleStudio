import Footer from './Footer';
import Header from './Header';
import { Flex, Layout } from 'antd';

const DefaultLayout = ({ children }) => {
  return (
    <Flex gap="middle" wrap>
      <Layout style={{ backgroundColor: '#fff', width: '100%' }}>
        <Header />
        {children}
        <Footer />
      </Layout>
    </Flex>
  );
};

export default DefaultLayout;
