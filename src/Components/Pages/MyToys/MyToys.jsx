import React, { useEffect, useState } from 'react';
import Mytoy from './Mytoy';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [mytoys, setMytoys] = useState([]);
    const [control, setControl] = useState(false);



    useEffect(() => {
        fetch(`https://assainment-11-sarver.vercel.app/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {

                setMytoys(data);


            });
    }, [user, control]);



    const deleteHandaler = (id) => {

        fetch(`https://assainment-11-sarver.vercel.app/mytoys/${id}`, {

            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {


                    const remaining = mytoys.filter(toy => toy._id !== id)
                    setMytoys(remaining)

                }

            })

    }

   


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>

                            <th>Photo</th>
                            <th>Name </th>
                            <th>Price</th>
                            <th> Quantity</th>
                            <th> Delete</th>
                            <th> Update</th>
                        </tr>
                    </thead>
                    {

                        mytoys?.map((mytoy, index) => <Mytoy
                            index={index + 1}
                            key={mytoy._id}
                            mytoy={mytoy}
                            deleteHandaler={deleteHandaler}

                        />)

                    }
                </table>
            </div>

        </div>
    );
};

export default MyToys;