import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventBoard from '../../components/EventBoard';

function EventsPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <EventBoard/>
      <Footer/>
    </>
  );
}

export default EventsPage;