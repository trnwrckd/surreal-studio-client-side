import './Products.css';

import React from 'react';
import Product from '../Product/Product';
import { useProducts } from '../../../../Hooks/useProducts';
import Loading from '../../../../Shared/Loading/Loading';

function Products() {
  const { products, productLoaded } = useProducts();

  if (!productLoaded) return <Loading />;

  if (products.length === 0) {
    <div className="py-5">
      <div className="mt-nav container py-5">
        <h2 className="py-5 my-5">No Current Products</h2>
      </div>
    </div>;
  } else {
    return (
      <div className="mt-4">
        <h1 className="pb-3">Newest Artworks</h1>
        <div className="container my-4 py-5 overflow-hidden">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
            {
                                products.slice(0, 6).map((product) => <Product key={product._id} product={product} />)
                            }
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
