import './Order.css';

import React from 'react';

const Order = (props) => {
    
    const { email, phoneNumber, address, orderStatus, _id } = props.order;

    return (
        <div className="col">
            <div className="order-container pt-5 pb-2">
                <div className="order-status">
                    {
                        orderStatus === "Pending" ?
                            <h5 data-col="light-red">{orderStatus}</h5>
                            : <h5 data-col="light-green">{orderStatus}</h5>
                    }
                </div>
                <div>
                    <h5>Order id - {_id}</h5>
                    <h6>Email - {email}</h6>
                    <h6>Address - {address}</h6>
                    <h6>Phone - {phoneNumber}</h6>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Order;