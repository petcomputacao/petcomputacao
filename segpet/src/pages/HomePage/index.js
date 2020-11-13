import React from 'react';
import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import Pillars from '../../components/Pillars';
import SocialNetworks from '../../components/SocialNetworks';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';
import SlideShow from '../../components/SlideShow';

function Home(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <React.Fragment>
      <Header/>
      <SlideShow/>
      <Introduction/>
      <Pillars/>
      <SocialNetworks/>
      <FAQ/>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;