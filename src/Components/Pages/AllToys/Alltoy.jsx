import React from 'react';

const Alltoy = ({ toy, index }) => {
    console.log(toy)
    return (
      
       <>
      <tbody>
      {/* row 1 */}
      <tr>
        <th>{index}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      </tbody>
       </>
    );
};

export default Alltoy;