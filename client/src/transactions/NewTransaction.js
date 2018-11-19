import React, { Component } from 'react';
import Order from './Order'

class NewTransaction extends Component {

  //orders are unique, populate the orders state with empty hashes, orders will be accessed and defined based on index
  // map over orders state, return order components for each hash
  //orders will have remove buttons responsible for sending back an orders index and splicing it from the array
  // NewTransaciton component will have an add order button to create another order slot.

  state = {orders: [{}]}


  mapOrders = () => {
    return this.state.orders.map((order, index)=> <Order index={index}/>)
  }

  render() {
    return (
      <div>
        New Transaction:
        {this.mapOrders()}
      </div>
    );
  }
}

export default NewTransaction;
