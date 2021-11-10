import './Explore.css';
import Footer from '../../Shared/Footer/Footer'
import Header from '../../Shared/Header/Header'
import React from 'react';
import { useProducts } from '../../Hooks/useProducts';
import Product from '../Home/Products/Product/Product';

const Explore = () => {

    const {products} = useProducts();

    return (
        <>
            <Header></Header>
            <div className="mt-nav py-5 ">
                <h1>Explore</h1>
                <div className="container py-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
                    {
                        products.map(product => <Product key={product.id} product = {product} />)
                    }
                </div>
            </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Explore;