import './Review.css';

import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, image, content ,rating } = props.review;
    console.log(image);
    return (
        <div className="review-container p-3 m-3">
            <p className="px-3 py-1 mb-1"> {content}</p>
            <Rating className="my-2"
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly>
            </Rating>   
            <div className="d-flex justify-content-center align-items-center">
                <div><img src={image} className="img-circle" height="48px" alt=""/></div>
                <h5 className="ms-2">{name}</h5>
            </div>
        </div>
    );
};

export default Review;