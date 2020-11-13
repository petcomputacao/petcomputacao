import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemberBoard from '../../components/MemberBoard';

function MembersPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <MemberBoard/>
      <Footer/>
    </>
  );
}

export default MembersPage;