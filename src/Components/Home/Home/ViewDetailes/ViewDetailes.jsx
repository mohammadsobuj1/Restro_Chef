import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import DynamicTytile from '../../../Pages/DyanamicTitle/DynamicTytile';

const ViewDetailes = () => {
    const details = useLoaderData()
    const { name, photo, sellarname, price, rating, email, quantity
        , description, categorey } = details;
    const navigate = useNavigate()
    const backHandaler = () => {
        navigate('/')
        window.scrollTo(0, 0);
    }

    return (
        <div>

            <DynamicTytile title="Toy_Detailes" />

            <div className="  bg-gray-300 ">
                <div className="md:text-5xl text-2xl text-center  py-3 text-orange-500 font-ital underline  ">
                    Here's is {name} Detailes
                </div>
                <div className="hero-content flex-col  md:flex-row justify-around">
                    <img src={photo} className=" rounded-lg shadow-2xl w-[full] md:w-[50%] mx-auto" />
                    <div>
                        <div className="md:flex md:py-3">

                            <div className="text-xl lg:text-2xl font-headers font-bold">Hero Name :

                            </div>
                            <p className='font-headers text-xl lg:text-3xl text-orange-500 md:mx-3'>  {name}

                            </p>
                        </div>

                        <div className="md:flex md:gap-8 ">
                            <div className="font-headers text-xl lg:text-3xl text-gray-500 ">Sellar Name : {sellarname}</div>
                            <div className="text-xl lg:text-2xl font-headers font-bold">User Email : {email}</div>
                        </div>

                        <div className='lg:text-xl font-ital  font-semibold'>Price : $ {price}</div>

                        <div className="md:flex  gap-9 py-2">
                            <div className='lg:text-xl font-ital  font-semibold '> Quantity : {quantity}</div>
                            <div className="flex gap-4">
                                <div className='lg:text-xl font-italic font-semibold '> rating : {rating}</div>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating}
                                    readOnly
                                    className='text-xl'
                                />

                            </div>
                           
                        </div>
                        <div className='text-xl font-ital p-2 font-semibold '> Categorey : {categorey}</div>
                        <div className='text-xl font-ital  font-semibold '> description : <div className="font-semibold font-italic text-sm lg:text-xl">{description}</div></div>
                        <button className="btn btn-primary mt-5 " onClick={backHandaler}>Back To Home </button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ViewDetailes;