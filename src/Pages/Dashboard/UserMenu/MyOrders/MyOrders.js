import './MyOrders.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../Hooks/useAuth';
import Order from '../../../../Shared/Order/Order';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const delNotify = () => toast("Order Deleted.");

    // delete order
    const handleDeleteOrder = (id) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure?',
            buttons: [
            {
                label: 'Yes',
                    onClick: () => {
                    const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        delNotify();
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
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

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoaded(true);
            });
    }, [user.email]);

    return (
        <div className="fit py-2">
            <h1 className="mb-2"> My Orders</h1>
             <div className="row row-cols 1 row-cols md-2 row-cols-lg-3 g-3">
                    {
                        orders.map(order =>
                            <Order key={order._id} order={order}>
                                <div className="d-flex justify-content-center">
                                                <button className="btn-generic btn-red" onClick={() => handleDeleteOrder(order._id)}> Delete
                                                    <i className="fas fa-trash-alt ms-1"></i>
                                                </button>
                                            </div>
                            </Order>
                                )
                    }
                </div>
            
            
            
        </div>
    );
};

export default MyOrders;