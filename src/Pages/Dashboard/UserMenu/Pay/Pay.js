import './Pay.css';
import gif from './under-construction.gif';
import React from 'react';

const Pay = () => {
    return (
        <div className="fit py-5">
            <h1>Pay</h1>
            <div className="py-2"><img src={gif} alt="" /></div>
            <h4>Payment system coming soon.</h4>
        </div>
    );
};

export default Pay;