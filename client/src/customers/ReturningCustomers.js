import React, { Component } from 'react';
import CustomerList from './CustomerList'

class ReturningCustomers extends Component {

    state = {
      customerIdSelected: this.props.defaultCustomer ? this.props.defaultCustomer.id : 1,
      customerList: []
    }

  componentDidMount(){
    this.fetchCustomers()
  }

  handleChange = (event) => {
     this.setState({customerIdSelected: event.target.value
     })
   }

  fetchCustomers = () => {
    fetch('/customers')
    .then(resp => resp.json())
    .then(json => this.setState({customerList: json}))
  }

  renderDropDown = () => {
    if (this.state.customerList.length > 0){
      return  <CustomerList list={this.state.customerList} defaultCustomerId={this.props.defaultCustomer.id} handleChange={this.handleChange}/>
    } else {
      return <span> No existing customers please set up a new account: <button onClick={this.props.handleClick}>New Customer</button> </span>
    }
  }

  render() {
    console.log(this.state.customerIdSelected)
    return (
      <div>
        {this.renderDropDown()}
      </div>
    );
  }
}

export default ReturningCustomers;
