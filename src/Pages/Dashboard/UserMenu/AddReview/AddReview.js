import './AddReview.css';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../../../Hooks/useAuth';
import { Rating } from '@mui/material';

const AddReview = () => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const { user } = useAuth();
    
    const [rating, setRating] = useState(0);

    const notify = () => toast("Review Added Successfully!");

    const handleRatingChange = (value) => {
        const rating = value.target.value;
        setRating(rating);
    }

    const onSubmit = (data) => {
        data.name = user.displayName;
        data.email = user.email;
        data.rating = rating;
        const displayImage  = user.photoURL || 'https://i.ibb.co/5rJ3gMz/fakeDP.png'
        data.displayImage = displayImage;
        
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    notify();
                    reset();
                }
            });
    }

    return (
        <div className="fit">
            <h1>Add Review</h1>
            <div className='d-flex justify-content-center py-3'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                     <ToastContainer/>
                    {/* name */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" defaultValue={user.displayName} type="text" placeholder="Name" id="name" {...register("name")} />
                        <label htmlFor="name">Name</label>
                    </div>

                    {/* email */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" defaultValue={user.email} type="email" placeholder="Email" id="email" {...register("email")} />
                        <label htmlFor="email">Email</label>
                    </div>

                    {/* review */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" type="text" placeholder="Review" id="review" {...register("content" ,  { required: "Review is required" })} />
                        <label htmlFor="review">Review</label>
                        {errors.content && <p className="text-danger fw-bold m-0"> {errors.content.message}</p>}
                    </div>

                    {/* rating */}
                    <Rating className="mb-2"
                        name="facilityRate"
                        onChange={handleRatingChange}
                        placeholderRating={0}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        // value={this.state.form.facilityRate}
                    >
                    </Rating>
                    <input type="hidden" {... register("rating")} />
                    <input type="hidden" {... register("image")} />

                    <div className="mt-3"><button className="btn-generic btn-blue">
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;