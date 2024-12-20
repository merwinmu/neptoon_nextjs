import React from 'react';         
import Wrapper  from "../layout/Wrapper" 
import HomeOne from '@/components/homes/multi-page/home';

export const metadata = {
  title: "neptoon.ch - Digital Automation & Web Solutions",
};


const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;