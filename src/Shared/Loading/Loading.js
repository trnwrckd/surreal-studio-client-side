import './Loading.css';

import React from 'react';
import Loader from "react-js-loader";

const Loading = () => {
    return (
        <div className = "loader d-flex align-items-center justify-content-center">
            <div >
                <Loader type="heart" bgColor={"crimson"} title={"Please Wait.."} color={'black'} size={100} />
            </div>
        </div>
    );
};

export default Loading;