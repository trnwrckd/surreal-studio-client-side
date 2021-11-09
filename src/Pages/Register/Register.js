import './Register.css';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Hooks/useAuth';
import { useHistory } from 'react-router';

const Register = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const redirectURL = '/';

    const history = useHistory();
    const { googleSignin , emailRegister , error} = useAuth();
    
    const onSubmit = (data) => {
        const { name, email, password } = data;
        emailRegister(name, email , password , redirectURL , history)
    }

    const handleGoogleSignin = () => {
        googleSignin(redirectURL , history);
    }

    const redirectToLogin = () => {
        history.push('/login');
    }
    return (
        <div className="register-bg py-5 mt-nav">
            <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center">

                <div></div>

                <div className="d-flex flex-column register px-3 py-4">
                    <h1 className="mb-4">Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                        <div className="form-floating mb-2">
                            <input className="form-control px-5" type="text" placeholder="Name" id="name" {...register("name", { required: "Name is required" })} />
                            <label htmlFor="name">Name</label>
                            {errors.name && <p className="text-danger fw-bold m-0">{errors.name.message}</p>}
                        </div>
                        <div className="form-floating mb-2">
                            <input className="form-control px-5" type="email" placeholder="Email" id="email" {...register("email", { required: "Email is required" })} />
                            <label htmlFor="email">Email</label>
                            {errors.email && <p className="text-danger fw-bold m-0">{errors.email.message}</p>}
                        </div>
                        <div className="form-floating mb-2">
                            <input className="form-control px-5" type="password" placeholder="Password" id="email" {...register("password", { required: "Password is required" , minLength:{value:6 , message:"Password must be atleast 6 characters"}})} />
                            <label htmlFor="email">Password</label>
                            {errors.password && <p className="text-danger fw-bold m-0">{errors.password.message}</p>}
                        </div>
                        {
                            error && !errors.password && !errors.email && !errors.name &&
                                <p className="text-danger fw-bold">{error}</p>
                        }
                        <div>
                            <button className="btn-generic">
                                Register <i className="fas fa-sign-in-alt ms-1"></i>
                            </button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <button className="btn-generic btn-orange" onClick={handleGoogleSignin}>
                            <i className="fab fa-google me-1"></i>
                            Register with Google
                        </button>
                    </div>

                    <p className="redirect-register pt-3 fw-bold" onClick={redirectToLogin}>Already have an account?</p>

                </div>
            </div>
            

        </div>
    );
};

export default Register;

