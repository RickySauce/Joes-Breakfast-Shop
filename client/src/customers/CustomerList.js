import React from 'react';

const CustomerList = ({list, defaultCustomerId, handleChange}) => {

  const mapList = () => {
      return list.map(customer => {
        let text = customer.name ? customer.name : `Customer #${customer.id}`
        return  <option key={customer.id} value={customer.id}>{text}</option>
      })
  }

 return (
   <select defaultValue={defaultCustomerId ? defaultCustomerId : ''} onChange={handleChange}>
    {mapList()}
    </select>
 );
}

export default CustomerList
