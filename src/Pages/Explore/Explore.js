import './Explore.css';
import Footer from 'Shared/Footer/Footer';
import Header from 'Shared/Header/Header';
import React from 'react';
import { useProducts } from 'Hooks/useProducts';
import Product from 'Pages/HomePage/Products/Product/Product';
import Loading from 'Shared/Loading/Loading';

function Explore() {
  const { products, productLoaded } = useProducts();
  if (!productLoaded) {
    return (
      <div className="mt-nav py-5">
        <Header />
        <Loading />
        <Footer />
      </div>
    );
  }

  if (products.length === 0) {
    <div className="mt-nav py-5">
      <div className="container py-5">
        <h2 className="py-5 my-5">No Current Products</h2>
      </div>
    </div>;
  } else {
    return (
      <>
        <Header />
        <div className="mt-nav py-5 ">
          <h1>Explore</h1>
          <div className="container mt-5  overflow-hidden">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
              {[...products].reverse().map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Explore;
