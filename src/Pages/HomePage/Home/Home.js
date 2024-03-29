import './Home.css';
import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products/Products';
import Reviews from '../Reviews/Reviews/Reviews';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import Surrealism from '../Surrealism/Surrealism';

function Home() {
  return (
    <>
      <Header />
      <div className="mt-nav">
        <Banner />
        <Products />
        <Reviews />
        <Surrealism />
      </div>
      <Footer />
    </>
  );
}

export default Home;
