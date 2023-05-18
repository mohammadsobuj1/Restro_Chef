import React, { useState } from 'react';


const Mytoy = ({ mytoy, index,deleteHandaler }) => {

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
                        <button onClick={() => deleteHandaler(_id)} className="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <button>E</button>
                    </td>
                </tr>


            </tbody>
        </>
    );
};

export default Mytoy;