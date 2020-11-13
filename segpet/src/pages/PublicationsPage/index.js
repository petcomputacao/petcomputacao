import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PublicationsBoard from '../../components/PublicationsBoard';

function PublicationsPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <PublicationsBoard/>
      <Footer/>
    </>
  );
}

export default PublicationsPage;