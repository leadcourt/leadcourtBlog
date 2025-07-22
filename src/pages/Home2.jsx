import React, { useEffect } from 'react';
import HeaderMain from '../components/Level/HeaderMain';
import BreakingNews from '../components/Level/BreakingNews';
import Banner from '../components/Level/Banner';
import PostSection from '../components/Level/PostSection';
import ConnectWithUs from '../components/Level/ConnectWithUs';
import Footer from '../components/Level/Footer';
import ScrollTop from '../components/Level/ScrollTop';

const Home2 = () => {
        
  return (
    <div className='sm:px-6 lg:px-8'>
      {/* <BreakingNews /> */}
      <Banner />
      <PostSection />
      <ScrollTop />
      {/* <Preloader /> */}
    </div>
  );
};

export default Home2;

