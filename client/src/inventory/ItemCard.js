import React from 'react';

const ItemCard = ({name, quantity}) => {


  return (
    <tr>
      {name}: {quantity}
    </tr>
  );
}

export default ItemCard
