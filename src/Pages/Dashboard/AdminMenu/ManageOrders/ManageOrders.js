import './ManageOrders.css';

import React, { useEffect, useState } from 'react';
import Order from '../../../../Shared/Order/Order';
import { toast, ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import Loading from 'Shared/Loading/Loading';
import { apiUrl } from 'utils/constants';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`${apiUrl}/orders`)
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoaded(true);
      });
  }, [orders]);

  // notification for update and delete
  const delNotify = () => toast.error('Order Deleted.');
  const updateNotify = () => toast.success('Order Approved!');

  // delete order
  const handleDeleteOrder = id => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const url = `apiUrlorders/${id}`;
            fetch(url, {
              method: 'DELETE',
            })
              .then(res => res.json())
              .then(data => {
                if (data.deletedCount > 0) {
                  delNotify();
                  const remainingOrders = orders.filter(
                    order => order._id !== id
                  );
                  setOrders(remainingOrders);
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

  // update order status
  const handleUpdateStatus = id => {
    const updatedOrder = { ...order, orderStatus: 'Shipped' };
    setOrder(updatedOrder);

    const url = `apiUrlorders/${id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          updateNotify();
          setOrder(data);
        }
      });
  };

  if (!loaded) return <Loading />;
  else {
    if (orders.length === 0) {
      <div className='py-5'>
        <div className='container py-5'>
          <h2 className='py-5 my-5'>No Current Orders</h2>
        </div>
      </div>;
    } else {
      return (
        <div className='fit my-3'>
          <h1 className='mb-2'> Manage Orders</h1>
          <ToastContainer />
          <div className='container py-3'>
            <div className='row row-cols 1 row-cols md-2 row-cols-lg-3 g-3'>
              {orders.map(order => (
                <Order key={order._id} order={order}>
                  <div className='d-flex justify-content-center'>
                    <button
                      className='btn-del '
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      {' '}
                      Delete
                      <i className='fas fa-trash-alt ms-1 text-danger fw-bold'></i>
                    </button>
                    {order.orderStatus === 'Shipped' || (
                      <button
                        className='btn-update ms-2'
                        onClick={() => {
                          handleUpdateStatus(order._id);
                        }}
                      >
                        Confirm
                        <i className='far fa-check-circle ms-1 text-success fw-bold'></i>
                      </button>
                    )}
                  </div>
                </Order>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ManageOrders;
