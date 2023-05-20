
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import img from "../../../assets/logo/Add_a_heading-removebg.png"



const Footer = () => {
    return (
        <div className="bg-gray-600 grid md:grid-cols-5 grid-cols-2  w-[100%] mx-auto md:p-16 p-11 mt-10">
            <div className=''>
             <img src="https://i.postimg.cc/7LsSPGr4/Add-a-heading-removebg.png" width={120} alt="" />
             <div className="font-bold text-xl text-white opacity-80"> Super Hero univers</div>
            </div>
            <div className="m-3">
                <ul>
                    <Link> <li className="font-bold underline text-xl text-white opacity-80">Services</li></Link>
                    <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Cooking</li></Link>
                    <Link> <li className="font-medium text-white my-2 opacity-75 font-italic ">Food</li></Link>
                    <Link><li className="font-medium text-white my-2 font-italic ">Occations</li></Link>
                    <Link><li className="font-medium text-white my-2 font-italic ">Advertisement</li></Link>
                </ul>
            </div>
            <div className="m-3">
                <ul>
                    <Link> <li className="font-bold underline text-xl text-white opacity-80">Useful Links</li></Link>
                    <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Success</li></Link>
                    <Link> <li className="font-medium text-white my-2 opacity-75 font-italic ">Food</li></Link>
                    <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Occations</li></Link>
                    <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Privacy &  Policy</li></Link>
                </ul>
            </div>
            <div className="m-3">
                <ul>
                    <Link> <li className="font-bold underline text-xl text-white opacity-80">About us</li></Link>
                    <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Branding</li></Link>
                    <Link> <li className="font-medium text-white my-2 opacity-75 font-italic ">Contact</li></Link>
                    <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Jobs</li></Link>
                    <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Advertisement</li></Link>
                </ul>
            </div>
            <div className="m-3">
                <ul>
                    <Link> <li className="font-bold underline text-xl text-white opacity-80">Contact us</li></Link>
                    <Link><li className="text-3xl my-2 opacity-75 text-blue-900"><FaFacebook /></li></Link>
                    <Link> <li className="text-3xl my-2 opacity-75 text-blue-700"><FaTwitter /></li></Link>
                    <Link><li className="text-3xl my-2 opacity-75 text-red-400"><FaInstagram /></li></Link>
                    <Link><li className="text-3xl my-2 opacity-75 text-red-700"><FaYoutube /></li></Link>

                </ul>
            </div>

        </div>
    );
};

export default Footer;


