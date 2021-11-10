import './Products.css';

import React from 'react';
import Product from '../Product/Product';
import { useProducts } from '../../../../Hooks/useProducts';

const Products = () => {

    const {products} = useProducts();

    return (
        <div className="mt-4">
            <h1>Newest Artworks</h1>
            <div className="container py-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
                    {
                        products.slice(0,6).map(product => <Product key={product._id} product = {product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;