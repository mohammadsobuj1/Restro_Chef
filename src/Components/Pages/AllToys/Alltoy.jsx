import React from 'react';
import { Link } from 'react-router-dom';

const Alltoy = ({ toy, index }) => {
 
  const { _id,name, photo, categorey, price, quantity, sellarname } = toy;
  return (
    <>
      <tbody>
        {/* row 1 */}
        <tr className='uppercase font-medium font-ital shadow-lg'>
          <th>{index}</th>
          <td className='text-gray-500 font-bold'>{sellarname}</td>
          <td>{name}</td>
          <td>{categorey}</td>
          <td className='text-orange-400 font-bold'>$ {price}</td>
          <td>{quantity}</td>
          <td> <div className=" ">
            <Link to={`/detailes/${_id}`}> <button  className=" btn btn-outline btn-error">View Details</button></Link>
          </div></td>
        </tr>
      </tbody>
   
    </>
  );
};

export default Alltoy;