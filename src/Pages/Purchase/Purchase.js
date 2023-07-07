import './Purchase.css';

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import apiUrl from 'constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Header from 'Shared/Header/Header';
import Footer from 'Shared/Footer/Footer';
import 'react-confirm-alert/src/react-confirm-alert.css';

import PersonPinIcon from '@mui/icons-material/PersonPin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Loader from 'react-js-loader';
import axios from 'axios';

const Purchase = () => {
  const { user, admin } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const [product, setProduct] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/products/${id}`)
      .then(result => result.json())
      .then(data => {
        setProduct(data);
        setIsLoaded(true);
      });
  }, [id]);

  const notify = () => toast.info('Order placed Successfully!');

  const history = useHistory();
  const redirectToOrders = () => {
    admin
      ? history.push('/dashboard/manageorders')
      : history.push('/dashboard/myorders');
  };

  const onSubmit = data => {
    data.name = user.displayName;
    data.email = user.email;

    data.orderStatus = 'Pending';

    axios.post(`${apiUrl}/orders`, data).then(res => {
      if (res.data.insertedId) {
        notify();
        reset();
        setTimeout(redirectToOrders, 2000);
      }
    });
  };
  return (
    <>
      <Header></Header>
      <div className='mt-nav py-5 overflow-hidden'>
        <div className='container pb-5 mb-5'>
          <div className='row row-cols-1 row-cols-md-2 g-5'>
            <div className='col order-md-2'>
              <div>
                <div className='d-flex justify-content-center'>
                  {isLoaded ? (
                    <>
                      <h3 className='me-3'> {product?.artistName}</h3>
                      <h3 className='d-flex align-items-center justify-content-center'>
                        {' '}
                        <PersonPinIcon
                          sx={{ fontSize: 'h4.fontSize' }}
                        ></PersonPinIcon>{' '}
                        {product?.artistLocation}
                      </h3>
                    </>
                  ) : (
                    <Loader
                      type='ring'
                      bgColor={'goldenrod'}
                      color={'black'}
                      size={50}
                    />
                  )}
                </div>

                <div className='w-75 mx-auto overflow-hidden'>
                  <h4
                    className='d-flex align-items-center justify-content-center my-0 py-2 bg-dark'
                    data-col='gold'
                  >
                    <AttachMoneyIcon
                      sx={{ fontSize: 'h4.fontSize' }}
                    ></AttachMoneyIcon>{' '}
                    {product?.price}
                  </h4>
                  <img
                    src={product?.image}
                    className='img-fluid purchase-img'
                    height='400px'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='col order-md-1 d-flex flex-column justify-content-center'>
              <h2>Purchase Artwork</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='form-group'>
                <ToastContainer />
                {/* name */}
                <div className='form-floating mb-2'>
                  <input
                    className='form-control px-5'
                    defaultValue={user.displayName}
                    type='text'
                    placeholder='Name'
                    id='name'
                    {...register('name')}
                  />
                  <label htmlFor='name'>Name</label>
                </div>

                {/* email */}
                <div className='form-floating mb-2'>
                  <input
                    className='form-control px-5'
                    defaultValue={user.email}
                    type='email'
                    placeholder='Email'
                    id='email'
                    {...register('email')}
                  />
                  <label htmlFor='email'>Email</label>
                </div>

                {/* address */}
                <div className='form-floating mb-2'>
                  <input
                    className='form-control px-5'
                    type='text'
                    placeholder='Address'
                    id='address'
                    {...register('address', {
                      required: 'Address is required',
                    })}
                  />
                  <label htmlFor='address'>Shipping Address</label>
                  {errors.address && (
                    <p className='text-danger m-0'> {errors.address.message}</p>
                  )}
                </div>

                {/* contact no */}
                <div className='form-floating mb-2'>
                  <input
                    className='form-control px-5'
                    type='number'
                    placeholder='Phone Number'
                    id='phone'
                    {...register('phoneNumber', {
                      required: 'Phone Number is required',
                    })}
                  />
                  <label htmlFor='phone'>Phone Number</label>
                  {errors.phoneNumber && (
                    <p className='text-danger m-0'>
                      {' '}
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <input type='hidden' {...register('orderStatus')} />

                <div className='mt-3'>
                  <button className='btn-generic btn-blue'>Proceed</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
