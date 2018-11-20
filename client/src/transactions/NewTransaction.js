import React, { Component } from 'react';
import Order from './Order'

class NewTransaction extends Component {

  //orders are unique, populate the orders state with empty hashes, orders will be accessed and defined based on index
  // map over orders state, return order components for each hash
  //orders will have remove buttons responsible for sending back an orders index and splicing it from the array
  // NewTransaciton component will have an add order button to create another order slot.

  state = {orders: [{bacon:0, egg:0, cheese:0}]}

  mapOrders = () => {
    return this.state.orders.map((order, index)=> <Order key={index} handleRemove={this.handleRemove} handleChange={this.handleChange} index={index} order={order}/>)
  }

  handleAdd = () => {
    this.setState({orders: [...this.state.orders, {bacon:0, egg:0, cheese:0}]})
  }

  handleRemove = (index) => {
    if(this.state.orders.length > 1){
      let orders = this.state.orders
      debugger;
      orders.splice(index, 1)
      this.setState({orders: orders})
    } else {
      alert("A transaction must have at least one order")
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let data = JSON.stringify({transaction: this.state.orders, customer_id: this.props.customerId})
      fetch('/transactions', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: data
    })
    .then(res => res.json())
  }

  handleChange = (index, event) => {
    let orders = this.state.orders
    orders[index] = {...orders[index], [event.target.id]: event.target.value}
    this.setState({orders: orders})
  }

  render() {
    return (
      <div>
        New Transaction:
        <form onSubmit={this.handleSubmit}>
          {this.mapOrders()}
          <br/><br/>
          <button onClick={this.handleAdd}>Add another order</button>
         <input type="submit" value="Submit Transaction"/>
        </form>
      </div>
    );
  }
}

export default NewTransaction;
