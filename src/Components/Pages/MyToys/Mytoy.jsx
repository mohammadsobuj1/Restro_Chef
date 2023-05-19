import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Mytoy = ({ mytoy, index, deleteHandaler }) => {

    const { _id, photo, name, quantity, price } = mytoy;




    return (
        <>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>{index}</th>

                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={photo} />
                                </div>
                            </div>

                        </div>
                    </td>

                    <td>{name}</td>
                    <td> $ {price}</td>
                    <td>{quantity}</td>
                    <td>
                        <button onClick={() => deleteHandaler(_id)} className="btn btn-circle btn-outline bg-orange-300">
                            <FaRegTrashAlt className='text-xl' />
                        </button>

                    </td>
                    <td> <Link to={`/update/${_id}`}><button >E</button></Link></td>
                </tr>


            </tbody>
        </>
    );
};

export default Mytoy;