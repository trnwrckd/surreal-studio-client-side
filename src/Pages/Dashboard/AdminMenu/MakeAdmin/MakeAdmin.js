import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import apiUrl from 'constants';

const MakeAdmin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const notify = () => toast.success('Made Admin Successfully!');

  const onSubmit = data => {
    confirmAlert({
      title: 'Confirm Action',
      message: 'Are you sure?',
      overlayClassName: 'confirm-overlay',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.put(`${apiUrl}/users/admin`, data).then(data => {
              if (data.data.modifiedCount > 0) {
                notify();
                reset();
              }
            });
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <div className='fit py-3'>
      <h1>Make Admin</h1>
      <div className='d-flex justify-content-center py-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-75'>
          <ToastContainer />
          {/* name */}
          <div className='form-floating mb-2'>
            <input
              className='form-control px-5'
              type='email'
              placeholder='Email'
              id='email'
              {...register('email')}
            />
            <label htmlFor='email'>Email</label>
            {errors.email && (
              <p className='text-danger fw-bold m-0'> {errors.email.message}</p>
            )}
          </div>
          <div className='mt-3'>
            <button className='btn-generic btn-submit'>Proceed</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
