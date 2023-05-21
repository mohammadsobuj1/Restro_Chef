import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Alltoy from './Alltoy';
import Lottie from "lottie-react";
import animantion from "../../../assets/85557-empty.json"
import DynamicTytile from '../DyanamicTitle/DynamicTytile';

const AllToys = () => {
    const alltoys = useLoaderData()
    const [nameField, setNamefield] = useState("")
    const [Alltoys, setAlltoys] = useState(alltoys)
    const [notfound, setNotfound] = useState("")
    const searchHandaler = () => {
        fetch(`https://assainment-11-sarver.vercel.app/searchBy/${nameField}`)
            .then(res => res.json())
            .then(data => {
                
                setAlltoys(data)
                
                if (data.length <= 0) {
                    setNotfound(<Lottie className=' text-center w-[75%] mx-auto' animationData={animantion} loop={true} />)
                }
                

            })
    }
    const sliceeeHandaler=()=>{
        setAlltoys(alltoys)
    }

useEffect(()=>{
    if(alltoys.length >20){
        setAlltoys(alltoys.slice(0, 20))
    }
   
      
   
},[])


    return (
        <>
            <DynamicTytile title="All Toys" />
            <h1 className=' text-center font-semibold font-herder text-orange-300 m-8 md:text-5xl'>  our all toys</h1>
            <div className="flex justify-around mb-14 ">

                <div className=" flex  gap-4">
                    <input onChange={(e) => setNamefield(e.target.value)} className='border-3 bg-slate-300  px-6 py-2 rounded-md text-xl font-serif' placeholder='Type Name' type="text" />
                    <button onClick={searchHandaler} className='btn btn-outline btn-success'>Search</button>
                </div>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead >
                        <tr >
                            <th className='text-sm font-header'>No</th>
                            <th className='text-sm font-header'>Saller Name</th>
                            <th className='text-sm font-header'>Photo</th>
                            <th className='text-sm font-header'>Name </th>
                            <th className='text-sm font-header'>Category</th>
                            <th className='text-sm font-header'>Price</th>
                            <th className='text-sm font-header'>Quantity</th>
                            <th className='text-sm font-header'>View Details </th>
                        </tr>
                    </thead>
                    <>{notfound}</>
                    {
                        Alltoys?.map((toy, index) => <Alltoy
                            key={toy._id}
                            toy={toy}
                            index={index + 1}
                        />)
                    }


                </table>
            </div>


          <div className="w-[50%] mx-auto mt-8">
          <button onClick={sliceeeHandaler} className='btn btn-block '>all</button>
          </div>
        </>
    );
};

export default AllToys;