import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import rander from "../../public/99109-loading.json"




const PrivetRoute = ({children}) => {
    const { loader, user } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <div className="w-[25%] mx-auto mt-44">
            <p className='text-6xl text-red-400 font-bold'>Loading.......!!!!!</p>
            <Lottie animationData={rander} loop={true} />
        </div>
    }

    if (user) {
        return (children)
    }
    return <Navigate state={{from:location}} to="/login" replace ></Navigate>

};

export default PrivetRoute;