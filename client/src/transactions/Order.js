import React, { Component } from 'react';
import OrderField from './OrderField'

class Order extends Component {

  mapOrder= () => {
    //convert each order object into an array, each index will be an array of the key and value
    // use key to populate input and other text fields and value for placeholder
    return Object.entries(this.props.order).map((order,index) => {
      return <OrderField key={index} index={this.props.index} handleChange={this.props.handleChange} item={order[0]} value={order[1]}/>
    })
  }

render() {
   return (
     <p style={{fontSize:'16px'}}>
       <h5>Order #{this.props.index + 1}</h5>
        {this.mapOrder()}
        <button onClick={() => this.props.handleRemove(this.props.index)}>Remove order</button>
     </p>
   );
  }
}

export default Order
