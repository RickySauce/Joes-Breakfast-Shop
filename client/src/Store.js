import React from 'react';
import CustomersTransactionsContainer from './customers/CustomersTransactionsContainer'
import TransactionsContainer from './transactions/TransactionsContainer'
import InventoryContainer from './inventory/InventoryContainer'

const Store = ({name}) => {

 return (
   <div>
     <h2> Welcome to {name}!</h2>
     <CustomersTransactionsContainer/>
     <TransactionsContainer/>
     <InventoryContainer/>
    </div>
 );
}

export default Store
