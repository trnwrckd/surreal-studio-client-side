import './Banner.css';

import React from 'react';

const Banner = () => {
    return (
        <div className="banner-bg d-flex align-items-center">
            <div className="container">
                <div className="row row cols-1 row-md-cols-2">
                    <div className="col-12 col-lg-6 banner-text">
                        <p className="display-2" >Surreal Studio</p>
                        <div className="d-flex justify-content-center">
                            <p className="display-4 mx-4">BUY</p>
                            <p className="display-4 mx-4">SELL</p>
                        </div>
                        <p className="display-5"> Explore Surrealism</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;