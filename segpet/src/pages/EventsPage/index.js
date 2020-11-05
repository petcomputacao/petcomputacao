import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventBoard from '../../components/EventBoard';

function EventsPage(){
  return(
    <>
      <Header/>
      <EventBoard/>
      <Footer/>
    </>
  );
}

export default EventsPage;