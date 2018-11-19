import React from 'react';

const OrderField = ({item, value, index, handleChange}) => {


 return (
   <>
   <label> pieces of Bacon: </label>
    <input
     onChange={(event) => handleChange(index, event)}
     id="bacon"
     placeholder={value}
     value={value}
     type="number"/><br/>
     </>
 );
}

export default OrderField
