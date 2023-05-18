import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Alltoy from './Alltoy';

const AllToys = () => {
    const alltoys = useLoaderData()
    const [nameField, setNamefield] = useState("")
    const [Alltoys, setAlltoys] = useState(alltoys)

    const searchHandaler = () => {
        fetch(`https://assainment-11-sarver.vercel.app/searchBy/${nameField}`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data)
            })
    }

    return (
        <>
            <div className="text-center flex justify-center gap-4 mt-10">
                <input onChange={(e) => setNamefield(e.target.value)} className='border-3 bg-slate-500 px-5 py-2 rounded-md text-xl font-serif' type="text" />

                <button onClick={searchHandaler} className='btn btn-primary'>Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>

                            <th>Photo</th>
                            <th>Name </th>
                            <th>Price</th>
                        
                        </tr>
                    </thead>
                    {
                        Alltoys.map((toy,index) => <Alltoy
                            key={toy._id}
                            toy={toy}
                            index={index+1}

                        />)
                    }

                </table>
            </div>



        </>
    );
};

export default AllToys;