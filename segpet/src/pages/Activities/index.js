import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ActivityBoard from '../../components/ActivityBoard';

function Activities(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <ActivityBoard/>
      <Footer/>
    </>
  );
}

export default Activities;