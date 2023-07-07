import './Product.css';

import React from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useHistory } from 'react-router';

const Product = (props) => {
    const { _id, image, artistName, artistLocation, price } = props.product;

    const history = useHistory();

    const redirectToPurchase = (productID) => {
        const url = `/purchase/${productID}`;
        history.push(url);
    }


    return (
        <div className="col my-auto py-2">
            <div className="art-container">
                <div className="art-info d-flex flex-column justify-content-center align-items-center">
                    <div className="art-info-overlay w-100 d-flex flex-column align-items-center">
                        <h1> {artistName}</h1>
                        <h3 className="d-flex align-items-center my-3"><PersonPinIcon sx={{ fontSize:'h4.fontSize'}}></PersonPinIcon> {artistLocation}</h3>
                        <h3 className="d-flex align-items-center"><AttachMoneyIcon sx={{ fontSize:'h4.fontSize'}}></AttachMoneyIcon> {price}</h3>
                    </div>
                </div>
                
                <img className="img-fluid"  src={image} alt="" width="100%"/>
                
                <button className="btn-buy" onClick={ ()=>{redirectToPurchase(_id)}}> Buy Now</button>
            </div>    
        </div>
    );
};

export default Product;