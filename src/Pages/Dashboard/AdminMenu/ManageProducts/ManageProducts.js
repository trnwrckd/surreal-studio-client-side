import './ManageProducts.css';

import React from 'react';
import { useProducts } from '../../../../Hooks/useProducts';
import { toast, ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import Loading from '../../../../Shared/Loading/Loading';

const ManageProducts = () => {
  const { products, setProducts, productLoaded } = useProducts();

  const delNotify = () => toast.error('Product Deleted.');

  // delete product
  const handleDeleteProduct = id => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const url = `apiUrlproducts/${id}`;
            fetch(url, {
              method: 'DELETE',
            })
              .then(res => res.json())
              .then(data => {
                if (data.deletedCount > 0) {
                  delNotify();
                  const remainingProducts = products.filter(
                    product => product._id !== id
                  );
                  setProducts(remainingProducts);
                }
              });
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  if (!productLoaded) return <Loading />;
  else {
    if (products.length === 0) {
      <div className='py-5'>
        <div className='container py-5'>
          <h2 className='py-5 my-5'>No Current Products</h2>
        </div>
      </div>;
    } else {
      return (
        <div className='fit'>
          <h1 className='mb-2'>Manage Products</h1>
          <ToastContainer />
          <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 container pt-4 mx-0'>
            {products.map(product => (
              <div key={product._id}>
                <div className='col'>
                  <div className='d-flex flex-column flex-lg-row justify-content-center '>
                    <div className='prod-img'>
                      <img
                        src={product.image}
                        alt=''
                        height='210px'
                        width='180px'
                      />
                    </div>
                    <div className='prod-info'>
                      <div className=' h-100 py-3 d-flex flex-column justify-content-center align-items-center'>
                        <h6>{product.artistName}</h6>
                        <h6>{product.artistLocation}</h6>
                        <h6>$ {product.price}</h6>
                        <button
                          className='btn-del'
                          onClick={() => handleDeleteProduct(product._id)}
                        >
                          {' '}
                          Delete
                          <i className='fas fa-trash-alt ms-1 text-danger fw-bold'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
};

export default ManageProducts;
