import React from 'react';
import ItemCard from './ItemCard'

const InventoryList = ({inventory}) => {

  const mapInventory = inventory.map(item => <ItemCard name={item.type_name} quantity={item.quantity}/>)

  return (
   <table>
   Remaining inventory:
   <tbody>
    {mapInventory}
   </tbody>
   </table>
  );
}

export default InventoryList
