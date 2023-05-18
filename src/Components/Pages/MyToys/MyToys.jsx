import React, { useEffect, useState } from 'react';
import Mytoy from './Mytoy';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [mytoys, setMytoys] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMytoys(data);
            });
    }, [user, control]);





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
                            <th>Update / Delete</th>
                        </tr>
                    </thead>
                    {
                        mytoys?.map((mytoy, index) => <Mytoy
                            index={index + 1}
                            key={mytoy._id}
                            mytoy={mytoy}

                        />)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyToys;