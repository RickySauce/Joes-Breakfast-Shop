import React, { Component } from 'react';

class CustomersContainer extends Component {

  state = {selection: ''}

  handleClick = (event) => {
    console.log(event.target.text)
  }

  render() {
    return (
      <div>
        <span> <button onClick={this.handleClick}>New Customer</button> <button onClick={this.handleClick}>Returning Customer</button> </span>
      </div>
    );
  }
}

export default CustomersContainer;
