import React from 'react';
import Lottie from "lottie-react";
import rander from "../../../../public/98170-sunthalpy-404.json"
import { useNavigate } from 'react-router-dom';


const Error = () => {
    const navigate = useNavigate()
    const backHandaler = () => {
        navigate('/')
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className=' md:w-[25%] mx-auto'>
                < Lottie animationData={rander} loop={true} />

            </div>
            <h1 className='font-extrabold text-5xl text-center uppercase text-red-600'>oops !!! 404  error </h1>
            <p className='text-xl font-medium text-center  '>this page is not found ...!!</p>
            <div className="text-center mt-2 p-5">
                <button className='btn btn-primary' onClick={backHandaler}>Back to Home </button>
            </div>
        </>
    );
};

export default Error;