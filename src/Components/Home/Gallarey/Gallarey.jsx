import React from 'react';
import { FaCameraRetro, FaPhotoVideo } from 'react-icons/fa';

const Gallarey = () => {
    return (
        <div className=' bg-neutral-900 '>
            <div className="flex justify-center gap-4 pt-10">

                <FaPhotoVideo className='text-3xl md:text-5xl text-orange-400 ' />
                <h1 className=' text-3xl md:text-5xl  font-italic font-bold uppercase underline text-white'> Super heros's gallery</h1>
                <FaCameraRetro className='text-3xl md:text-5xl text-orange-400 ' ></FaCameraRetro>
            </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://cdn.pixabay.com/photo/2022/10/10/18/24/ai-generated-7512382_640.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://cdn.pixabay.com/photo/2019/06/05/14/45/avengers-4253785_640.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://cdn.pixabay.com/photo/2019/08/25/06/43/captain-america-4428842_640.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/premium-vector/superhero-gallant-pose_24381-736.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=sph" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/premium-photo/business-superhero-mixed-media_104033-57.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=sph" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016_1280.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://cdn.pixabay.com/photo/2020/05/15/16/42/batman-5174224_640.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://cdn.pixabay.com/photo/2016/03/11/14/21/brakedance-1250354_640.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://cdn.pixabay.com/photo/2022/09/22/03/03/hawkman-7471537_640.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/premium-vector/superhero-action-justice-posing-front-cityscape_18591-17901.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=sph" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Gallarey;