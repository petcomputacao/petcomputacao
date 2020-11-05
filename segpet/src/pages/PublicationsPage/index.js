import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PublicationsBoard from '../../components/PublicationsBoard';

function PublicationsPage(){
  return(
    <>
      <Header/>
      <PublicationsBoard/>
      <Footer/>
    </>
  );
}

export default PublicationsPage;