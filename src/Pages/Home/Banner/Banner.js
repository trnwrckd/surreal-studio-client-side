import './Banner.css';

import React from 'react';

const Banner = () => {

    const scrollDown = () => {
        let pageHeight = window.innerHeight ;
        window.scrollBy(0, pageHeight);
    }

    return (
        <div className="banner-bg d-flex align-items-center">
            <div className="container">
                <div className="row row cols-1 row-md-cols-2">
                    <div className="col-10 col-md-8 banner-text">
                        <p className="gigantext" >Surreal Studio</p>
                        <div className="d-flex justify-content-center">
                            <p className="fs-big mx-4">BUY</p>
                            <p className="fs-big mx-4">SELL</p>
                        </div>
                        <p className="fs-big"> Explore Surrealism</p>
                        <button className="btn-scrollDown" onClick={scrollDown}><i className="fas fa-chevron-down"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;