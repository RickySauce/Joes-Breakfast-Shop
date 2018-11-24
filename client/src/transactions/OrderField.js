import React from 'react';

const OrderField = ({item, value, index, handleChange}) => {


 return (
   <>
   <label> Units of {item}: </label>
    <input
     onChange={(event) => handleChange(index, event)}
     id={item}
     placeholder={value}
     value={value}
     min='0'
     type="number"/><br/>
     </>
 );
}

export default OrderField
