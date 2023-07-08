import './Footer.css';

import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="container py-5">
        <div className="row row-cols-2 row-cols-md-3 g-3">

          <div className="d-flex flex-column justify-content-center">
            <span className="footer-link">Sell your art</span>
            <span className="footer-link">Photo Gallery</span>
            <span className="footer-link">Videos</span>
            <span className="footer-link">Events</span>
          </div>

          <div className="d-flex flex-column justify-content-center my-3 my-md-0">
            <span className="footer-link">FAQ</span>
            <span className="footer-link">About us</span>
            <span className="footer-link">Contact us</span>
            <span className="footer-link">Help</span>
          </div>

          <div className="col-12 col-md-4">
            <div className="d-flex flex-column justify-content-center">
              <div className="footer-social mb-3">
                <i className="fab fa-facebook" />
                <i className="fab fa-twitter" />
                <i className="fab fa-instagram" />
                <i className="fab fa-youtube" />
              </div>
              <p>
                <small>© Surreal Studio , 2021</small>
                {' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
