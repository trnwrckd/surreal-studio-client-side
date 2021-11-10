import './Banner.css';

import React from 'react';

const Banner = () => {
    return (
        <div className="banner-bg  d-flex align-items-center">
            <div className="container">
                <div className="row row cols-1 row-md-cols-2">
                    <div className="col-12 col-md-6">
                        <h1>Welcome to</h1>
                        <h1>Surreal Studio</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;