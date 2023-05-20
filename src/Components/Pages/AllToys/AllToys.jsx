import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Alltoy from './Alltoy';
import Lottie from "lottie-react";
import animantion from "../../../assets/85557-empty.json"

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

    const shortHandaler =(sort)=>{
    
        fetch(`https://assainment-11-sarver.vercel.app/${sort}`)
        .then(res=>res.json())
        .then(data=>{
            setAlltoys(data)
        })
    }

    return (
        <>
        <h1 className=' text-center font-semibold font-herder text-orange-300 mt-8 md:text-5xl'>  our all toys</h1>
            <div className="flex justify-around m-10 ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-outline btn-success  m-1">Short By Price</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button className=' btn-sm bg-slate-400 text-bold' onClick={()=>shortHandaler("asen")}>  Asending Order</button></li>
                        <li><button className='mt-2  btn-sm text-bold bg-slate-400' onClick={()=>shortHandaler("desan")}>Desending Order</button></li>
                    </ul>
                </div>
                <div className=" flex  gap-4">
                    <input onChange={(e) => setNamefield(e.target.value)} className='border-3 bg-slate-300  px-6 py-2 rounded-md text-xl font-serif' placeholder='Type Name' type="text" />
                    <button onClick={searchHandaler} className='btn btn-outline btn-success'>Search</button>
                </div>

            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead >
                        <tr >
                            <th>No</th>
                            <th className='text-sm font-header'>Saller Name</th>
                            <th className='text-sm font-header'>Name </th>
                            <th className='text-sm font-header'>Category</th>
                            <th className='text-sm font-header'>Price</th>
                            <th className='text-sm font-header'>Quantity</th>
                            <th className='text-sm font-header'>View Details </th>
                        </tr>
                    </thead>
                    <>{notfound}</>
                    {
                        Alltoys.map((toy, index) => <Alltoy
                            key={toy._id}
                            toy={toy}
                            index={index + 1}
                        />)
                    }


                </table>
            </div>



        </>
    );
};

export default AllToys;