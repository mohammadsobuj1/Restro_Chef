import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetailes = () => {
    const details = useLoaderData()
    const { name, photo, sellarname, price, rating, email, quantity
        , description } = details;
    return (
        <div>
          
            <div className="  bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <img src={photo} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{sellarname}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ViewDetailes;