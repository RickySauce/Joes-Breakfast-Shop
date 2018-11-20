import React from 'react';

const TransactionsSearch = ({handleSubmit, handleChange}) => {

 return (
     <form onSubmit={handleSubmit}>
     <input
      onChange={handleChange}
      id="query"
      placeholder="enter date"
      type="date"/><br/>
      <input type="submit" value="Retrieve Transactions"/>
     </form>
 );
}

export default TransactionsSearch
