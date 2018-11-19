import React from 'react';
import CustomersContainer from './customers/CustomersContainer'

const Store = ({name}) => {

 return (
   <div>
     <h2> Welcome to {name}!</h2>
     <CustomersContainer/>
    </div>
 );
}

export default Store
