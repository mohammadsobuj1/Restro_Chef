import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Mytoy = ({ mytoy, index, deleteHandaler }) => {

    const { _id, photo, name, quantity, price, categorey, sellarname } = mytoy;




    return (
        <>
            <tbody>
                {/* row 1 */}
                <tr className='uppercase font-medium font-ital shadow-lg'>
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
                    <td>{sellarname}</td>
                    <td> <div className=' font-ital  font-semibold '>  {categorey}</div></td>
                    <td className='text-orange-400 font-bold'> $ {price}</td>
                    <td className='text-gray-500 font-bold'>{quantity}</td>
                    <td>
                        <button onClick={() => deleteHandaler(_id)} className="btn btn-circle btn-outline bg-orange-300">
                            <FaRegTrashAlt className='text-xl' />
                        </button>

                    </td>
                    <td> <Link to={`/update/${_id}`}><button className='btn btn-circle bg-orange-300 text-black hover:bg-orange-500'>Edit</button></Link></td>
                </tr>


            </tbody>
        </>
    );
};

export default Mytoy;