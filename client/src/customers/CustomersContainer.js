import React, { Component } from 'react';
import NewCustomer from './NewCustomer'
import ReturningCustomers from './ReturningCustomers'

class CustomersContainer extends Component {

  state = {selection: '', defaultCustomer: ''}

  handleClick = (event) => {
    //button clicked will set state to either "New Customer" or "Returning Customer"
    // state will determine if a new Customer will be created or a dropdown menu of customers will be displayed
    this.setState({selection: event.target.firstChild.data})
  }

  customerCreated = (customer) => {
    this.setState({selection: 'Returning Customer', defaultCustomer: customer})
  }

  renderButtonsOrForms = () => {
    switch(this.state.selection){

      case 'New Customer':
        return <NewCustomer customerCreated={this.customerCreated}/>

      case 'Returning Customer':
        return <ReturningCustomers defaultCustomer={this.state.defaultCustomer} changeClicked={this.props.changeClicked} handleClick={this.handleClick} />

      default:
        return <span> <button onClick={this.handleClick}>New Customer</button> <button onClick={this.handleClick}>Returning Customer</button> </span>
    }
  }

  render() {
    return (
      <div>
      {this.renderButtonsOrForms()}
      </div>
    );
  }
}

export default CustomersContainer;
