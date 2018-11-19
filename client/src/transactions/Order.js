import React from 'react';

const Order = ({index, handleRemove}) => {

 return (
   <div>
     Order #{index + 1} <button onClick={handleRemove}>Remove order</button>
   </div>
 );
}

export default Order
