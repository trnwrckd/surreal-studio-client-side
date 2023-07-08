import './Loading.css';

import React from 'react';
import Loader from 'react-js-loader';

function Loading() {
  return (
    <div className='loader d-flex align-items-center justify-content-center'>
      <Loader type='heart' bgColor='crimson' size={100} />
    </div>
  );
}

export default Loading;
