import React from 'react';
import './NotFound.css';
import notfound from './not-found.gif';
import { useHistory } from 'react-router';

const NotFound = () => {

    const history = useHistory();

    const redirectToHome = () => {
        history.push('/home')
    }

    return (
        <div className="py-fit not-found d-flex flex-column align-items-center justify-content-center">
            <div><img src={notfound} className="img-fluid" alt=""/></div>
            <div>
                <button className="btn-generic" onClick={redirectToHome}>
                    Home
                    <i className="fas fa-home ms-1"></i>
                </button>
            </div>
        </div>
    );
};

export default NotFound;