import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useLoaderData } from 'react-router-dom';

const ViewDetailes = () => {
    const details = useLoaderData()
    const { name, photo, sellarname, price, rating, email, quantity
        , description, } = details;



    return (
        <div>



            <div className="  bg-gray-300">
                <div className="text-5xl text-center  py-3 text-orange-500 font-ital underline  ">
                    Here's is {name} Detailes
                </div>
                <div className="hero-content flex-col  md:flex-row justify-around">
                    <img src={photo} className=" rounded-lg shadow-2xl" />
                    <div>
                        <div className="flex py-3">

                            <div className="text-2xl font-headers font-bold">Hero Name :

                            </div>
                            <p className='font-headers text-3xl text-orange-500 mx-3'>  {name}

                            </p>
                        </div>

                        <div className="flex gap-8 ">
                            <div className="font-headers text-3xl text-gray-500 ">Sellar Name : {sellarname}</div>
                            <div className="text-2xl font-headers font-bold">User Email : {email}</div>
                        </div>

                        <div className='text-xl font-ital  font-semibold'>Price : $ {price}</div>

                        <div className="flex  gap-9 py-2">
                            <div className='text-xl font-ital  font-semibold '> Quantity : {quantity}</div>
                            <div className="flex gap-4">
                                <div className='text-xl font-italic font-semibold '> rating : {rating}</div>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating}
                                    readOnly
                                    className='text-xl'
                                />

                            </div>
                        </div>
                        <div className='text-xl font-ital  font-semibold '> description : <div className="font-semibold font-italic text-xl">{description}</div></div>
                        <button className="btn btn-primary mt-5">Buy Now</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ViewDetailes;