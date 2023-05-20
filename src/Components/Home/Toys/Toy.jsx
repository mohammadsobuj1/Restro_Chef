/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Toy = ({ toy }) => {



    const { _id, name, rating, quantity, price, photo, categorey } = toy;
    const { user } = useContext(AuthContext)
    const veryFiedHandaler = () => {
        if (!user) {
            toast.error("Log In First")
        }
        else {

        }
    }



    return (

        <div className="card card-compact  bg-gray-300 h-[90%] my-0 shadow-xl">
            <figure><img src={photo} alt="photo" /></figure>
            <div className="card-body">
                <h2 className="card-title font-ital font-bold text-2xl"><div className='text-orange-500 font-italic'>  Hero Name :</div>{name}</h2>

                <div className="flex justify-between">
                    <div className='text-xl font-ital  font-semibold'>Price : $ {price}</div>

                    <div className='text-xl font-ital  font-semibold '> Quantity : {quantity}</div>
                </div>
                <div className="flex gap-4">
                    <div className='text-xl font-italic font-semibold '> rating : {rating}</div>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                        className='text-xl'
                    />
                </div>
                <div className='text-xl font-ital  font-semibold '> Categorey : {categorey}</div>
                <div className=" ">

                    <Link to={`detailes/${_id}`}> <button onClick={veryFiedHandaler} className=" bg-gray-600 btn btn-block ">View Details</button></Link>


                </div>
            </div>
            <ToastContainer 
            theme="dark"
            position="top-center"
            />
        </div>

    );
};

export default Toy;