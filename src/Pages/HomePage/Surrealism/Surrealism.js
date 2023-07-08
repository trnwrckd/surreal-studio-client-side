import './Surrealism.css';

import React from 'react';
import { useHistory } from 'react-router-dom';
import dali from './dali.jpg';

function Surrealism() {
  const history = useHistory();

  const redirectToArt = () => {
    history.push('/art');
  };

  return (
    <div className='d-flex flex-column flex-column-reverse flex-md-row'>
      <div className='half-width d-none d-md-block'>
        <img src={dali} alt='' className='dali-img' />
      </div>
      <div className='half-width py-5 px-3 d-flex flex-column align-items-center justify-content-center'>
        <h2>What is Surrealism?</h2>
        <h5 className='surrealism-def my-3'>
          Surrealism is an artistic, literary and philosophical movement
          following Dadaism, started by André Breton. <br />
          It says that the only way to find the truth in our world is through
          the subconscious. <br />
          {
            "Surrealism is a dreamlike protest against all rational logic, illustrating the mind's deepest thoughts."
          }{' '}
          <br />
          <small>
            <button
              className='btn-generic btn-submit my-2 fw-bold'
              onClick={redirectToArt}
            >
              Surrealism in Art
            </button>
          </small>
        </h5>
      </div>
    </div>
  );
}

export default Surrealism;
