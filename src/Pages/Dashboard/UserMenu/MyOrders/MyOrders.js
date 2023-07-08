import './MyOrders.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from 'Hooks/useAuth';
import Order from 'Shared/Order/Order';
import { confirmAlert } from 'react-confirm-alert';
import { toast, ToastContainer } from 'react-toastify';
import Loading from 'Shared/Loading/Loading';

function MyOrders() {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const delNotify = () => toast.error('Order Deleted.');

  // delete order
  const handleDeleteOrder = (id) => {
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
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  delNotify();
                  const remainingOrders = orders.filter(
                    (order) => order._id !== id,
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

  useEffect(() => {
    fetch(`apiUrlorders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoaded(true);
      });
  }, [user.email]);

  if (!loaded) return <Loading />;

  if (orders.length === 0) {
    return (
        <div className="py-fit my-5">
          <div className="container">
            <h2 className="py-5 my-5">No Current Orders</h2>
          </div>
        </div>
    );
  }
  return (
        <div className="fit py-2">
          <h1 className="mb-2"> My Orders</h1>
          <ToastContainer />
          <div className="row row-cols 1 row-cols md-2 row-cols-lg-3 g-3">
            {orders.map((order) => (
              <Order key={order._id} order={order}>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn-del"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    {' '}
                    Delete
                    <i className="fas fa-trash-alt ms-1 text-danger fw-bold"></i>
                  </button>
                </div>
              </Order>
            ))}
          </div>
        </div>
  );
}

export default MyOrders;
