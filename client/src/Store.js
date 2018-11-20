import React from 'react';
import CustomersContainer from './customers/CustomersContainer'
import TransactionsContainer from './transactions/TransactionsContainer'

const Store = ({name}) => {

 return (
   <div>
     <h2> Welcome to {name}!</h2>
     <CustomersContainer/>
     <TransactionsContainer/>
    </div>
 );
}

export default Store
