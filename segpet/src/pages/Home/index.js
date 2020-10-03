import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Introduction from '../../components/Introduction';
import Pillars from '../../components/Pillars';
import SocialNetworks from '../../components/SocialNetworks';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

function Home(){
  return(
    <React.Fragment>
      <Header/>
      <Hero/>
      <Introduction/>
      <Pillars/>
      <SocialNetworks/>
      <FAQ/>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;