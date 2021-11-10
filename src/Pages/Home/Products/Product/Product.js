import './Product.css';

import React from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Product = (props) => {

    const { image, artistName, artistLocation, price } = props.product;
    return (
        <div className="col">
            <div className="art-container">
                <div className="art-info d-flex flex-column justify-content-center align-items-center">
                    <h1> {artistName}</h1>
                    <h3 className="d-flex align-items-center my-3"><PersonPinIcon sx={{ fontSize:'h4.fontSize'}}></PersonPinIcon> {artistLocation}</h3>
                    <h3 className="d-flex align-items-center" data-col="dark-blue"><AttachMoneyIcon sx={{ fontSize:'h4.fontSize'}}></AttachMoneyIcon> {price}</h3>
                </div>
                <img className="img-fluid"  src={image} alt="" />
                <button className="btn-buy"> Buy Now</button>
            </div>    
        </div>
    );
};

export default Product;