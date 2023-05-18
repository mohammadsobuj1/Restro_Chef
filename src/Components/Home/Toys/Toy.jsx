/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id,name, categorey, quantity, price, photo } = toy;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={photo} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{categorey}</p>
                    <p>{quantity}</p>
                    <div className="card-actions justify-end">
                       <Link to={`detailes/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toy;