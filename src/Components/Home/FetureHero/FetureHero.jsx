import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FetureHero = ({ hero }) => {
    const { name, image, price, description, rating, category, quantity } = hero;
    return (
        <div className=''>
            <section
                className=" h-screen flex justify-center items-center gap-x-16 text-white "
            >
                <div
                    className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
                >
                    <div
                        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
                    >
                        <div className="absolute backface-hidden  border-2  w-full h-full">
                            <img src={image} className="w-full h-full rounded-xl" />
                        </div>
                        <div
                            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-300 overflow-hidden"
                        >
                            <div
                                className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                            >
                                <h1 className="text-3xl font-semibold">Name: {name}</h1>

                                <div className='text-xl font-ital  font-semibold'>Price : $ {price}</div>

                                <div className='text-xl font-ital  font-semibold '> Quantity : {quantity}</div>
                                <div className='text-xl font-ital  font-semibold '> Categorey : {category}</div>

                                <div className="flex gap-4">
                                    <div className='text-xl font-italic font-semibold '> rating : {rating}</div>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={rating}
                                        readOnly
                                        className='text-xl'
                                    />
                                </div>
                                <div className='text-xl font-ital  font-semibold '> description : <div className="font-semibold font-italic text-sm lg:text-xl">{description}</div></div>
                                <button
                                    className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                                >
                                  Pre-Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FetureHero;