import './Purchase.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import axios from 'axios';

const Purchase = () => {

    const { user } = useAuth();

    const { handleSubmit, register, formState: { errors } ,reset} = useForm();

    const { id } = useParams();
    
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`).then(result => result.json())
            .then(data => setProduct(data));
    }, [id]);

    const notify = () => toast("Order placed Successfully!");

    const onSubmit = (data) => {
        data.name = user.displayName;
        data.email = user.email;

        data.orderStatus = "Pending";

        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    notify();
                    reset();
                }
            })
    }

    return (
        <>
            <Header></Header>
            <div className="mt-nav py-5">
                <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col order-md-2">
                        <div>
                                <img src={product?.image} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col order-md-1 d-flex flex-column justify-content-center">
                        <h2>Purchase Artwork</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
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

                            {/* address */}
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" type="text" placeholder="Address" id="address" {...register("address", { required: "Address is required" })} />
                                <label htmlFor="address">Shipping Address</label>
                                {errors.address && <p className="text-danger fw-bold m-0"> {errors.address.message}</p>}
                            </div>
                                
                            {/* contact no */}
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" type="text" placeholder="Phone Number" id="phone" {...register("phoneNumber", { required: "Phone Number is required" })} />
                                <label htmlFor="phone">Phone Number</label>
                                {errors.phoneNumber && <p className="text-danger fw-bold m-0"> {errors.phoneNumber.message}</p>}
                            </div>

                            <input type="hidden" {...register("orderStatus")} />

                            <div className="mt-3"><button className="btn-generic btn-blue">
                                    Proceed
                                </button>
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