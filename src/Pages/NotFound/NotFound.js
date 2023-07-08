import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router';
import notfound from './not-found.gif';

function NotFound() {
  const history = useHistory();

  const redirectToHome = () => {
    history.push('/home');
  };

  return (
    <div className="py-fit not-found d-flex flex-column align-items-center justify-content-center">
      <div><img src={notfound} className="img-fluid" alt="" /></div>
      <div>
        <button className="btn-generic" onClick={redirectToHome}>
          Home
          <i className="fas fa-home ms-1" />
        </button>
      </div>
    </div>
  );
}

export default NotFound;
