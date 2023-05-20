import React, { useEffect, useState } from 'react';
import Mytoy from './Mytoy';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


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



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assainment-11-sarver.vercel.app/mytoys/${id}`, {

                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = mytoys.filter(toy => toy._id !== id)
                            setMytoys(remaining)


                        }

                    })


            }
        })

    }




    return (
        <div>
            <h1 className=' text-center font-semibold font-herder text-orange-300 mt-8 md:text-5xl'>  our all toys</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th className='text-sm font-header'>No</th>
                            <th className='text-sm font-header'>Photo</th>
                            <th className='text-sm font-header'>Name </th>
                            <th className='text-sm font-header'>Price</th>
                            <th className='text-sm font-header'> Quantity</th>
                            <th className='text-sm font-header'> Delete</th>
                            <th className='text-sm font-header'> Update</th>
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