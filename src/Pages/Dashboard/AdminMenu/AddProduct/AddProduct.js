import './AddProduct.css';

import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {

    const { handleSubmit, register, formState: { errors }, reset ,clearErrors } = useForm();

    const notify = () => toast.success("Product Added Successfully!", {
        theme:"dark"
    });


    const onSubmit = (data) => {
        console.log(data);
        
        axios.post('https://infinite-lowlands-70497.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    notify();
                    clearErrors();
                    reset();
                }
            });
    }

    return (
        <div className="fit">
            <h1>Add Product</h1>
            <div className='d-flex justify-content-center py-3'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-75">
                     <ToastContainer/>
                    {/* name */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" type="text" placeholder="Artist Name" id="name" {...register("artistName" ,  { required: "Artist Name is required" })} />
                        <label htmlFor="name">Artist Name</label>
                         {errors.artistName && <p className="text-danger fw-bold m-0"> {errors.artistName.message}</p>}
                    </div>

                    {/* location */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" type="text" placeholder="Artist Location" id="location" {...register("artistLocation" ,  { required: "Artist Location is required" })} />
                        <label htmlFor="location">Artist Location</label>
                         {errors.artistLocation && <p className="text-danger fw-bold m-0"> {errors.artistLocation.message}</p>}
                    </div>

                    {/* price */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" type="number" placeholder="Price" id="price" {...register("price" ,  { required: "Price is required" })} />
                        <label htmlFor="price">Price</label>
                         {errors.price && <p className="text-danger fw-bold m-0"> {errors.price.message}</p>}
                    </div>

                    {/* image */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" type="text" placeholder="Image URL" id="image" {...register("image" ,  { required: "Image URL is required" })} />
                        <label htmlFor="image">Image URL</label>
                         {errors.image && <p className="text-danger fw-bold m-0"> {errors.image.message}</p>}
                    </div>

                    <div className="mt-3"><button className="btn-generic btn-submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;