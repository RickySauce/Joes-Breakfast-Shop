import React, { Component } from 'react';
import Order from './Order'

class NewTransaction extends Component {

  //orders are unique, populate the orders state with empty hashes, orders will be accessed and defined based on index
  // map over orders state, return order components for each hash
  //orders will have remove buttons responsible for sending back an orders index and splicing it from the array
  // NewTransaciton component will have an add order button to create another order slot.

  state = {orders: [{}]}

  mapOrders = () => {
    return this.state.orders.map((order, index)=> <Order handleRemove={this.handleRemove} index={index}/>)
  }

  handleAdd = () => {
    this.setState({orders: [...this.state.orders, {}]})
  }

  handleRemove = (index) => {
    if(this.state.orders.length > 1){
      let orders = this.state.orders
      orders.splice(index,1)
      this.setState({orders: orders})
    } else {
      alert("A transaction must have at least one order")
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        New Transaction:
        {this.mapOrders()}
        <button onClick={this.handleAdd}>Add another order</button>
      </div>
    );
  }
}

export default NewTransaction;
