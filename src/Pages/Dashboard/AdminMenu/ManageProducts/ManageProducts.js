import './ManageProducts.css';

import React from 'react';
import { useProducts } from '../../../../Hooks/useProducts';
import { toast, ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

const ManageProducts = () => {

    const { products , setProducts} = useProducts();

    const delNotify = () => toast("Product Deleted.");

    // delete product
    const handleDeleteProduct = (id) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure?',
            buttons: [
            {
                label: 'Yes',
                    onClick: () => {
                    const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        delNotify();
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
                }
            },
            {
                label: 'No',
            }
            ]
        });
    }

    return (
        <div className="fit">
            <h1 className="mb-2">Manage Products</h1>
            <ToastContainer/>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 container pt-4 mx-0">
                {
                    products.map(
                        product =>
                            <div key= {product._id}>
                                <div className="col">
                                    <div className="d-flex flex-column flex-lg-row justify-content-center ">
                                        <div className="prod-img">
                                            <img src={product.image}  alt="" height="210px" width="180px" />
                                        </div>
                                        <div className="prod-info">
                                            <div className=" h-100 py-3 d-flex flex-column justify-content-center align-items-center">
                                                <h6>{product.artistName}</h6>
                                                <h6>{product.artistLocation}</h6>
                                                <h6>{product.price}</h6>
                                                <button className="btn-generic" onClick={() => handleDeleteProduct(product._id)}> Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProducts;