import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Alltoy = ({ toy, index }) => {
  const { user } = useContext(AuthContext)

  const { _id, name, photo, categorey, price, quantity, sellarname } = toy;

  const showAlartHandater = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Log In First ',
        text: 'You are Not Log In!',

      })
    }
  }

  return (
    <>
      <tbody>
        {/* row 1 */}
        <tr className='uppercase font-medium font-ital shadow-lg'>
          <th>{index}</th>
          <td className='text-gray-500 font-bold'>{sellarname}</td>
          <td ><div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} />
              </div>
            </div>

          </div></td>
          <td>{name}</td>
          <td>{categorey}</td>
          <td className='text-orange-400 font-bold'>$ {price}</td>
          <td>{quantity}</td>
          <td> <div className=" ">
            <Link to={`/detailes/${_id}`}> <button onClick={showAlartHandater} className=" btn btn-outline btn-error">View Details</button></Link>
          </div></td>
        </tr>
      </tbody>

    </>
  );
};

export default Alltoy;