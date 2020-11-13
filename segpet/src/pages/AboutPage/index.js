import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../../components/About';


function AboutPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return(
    <>
      <Header/>
      <About/>
      <Footer/>
    </>
  );
}

export default AboutPage;