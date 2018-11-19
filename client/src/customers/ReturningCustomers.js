import React, { Component } from 'react';
import CustomerList from './CustomerList'
import NewTransaction from '../transactions/NewTransaction'

class ReturningCustomers extends Component {

    state = {
      customerIdSelected: this.props.defaultCustomer ? this.props.defaultCustomer.id : 1,
      customerList: [],
      loading: true
    }

  componentDidMount(){
    this.fetchCustomers()
  }

  handleChange = (event) => {
     this.setState({customerIdSelected: event.target.value})
   }

  fetchCustomers = () => {
    fetch('/customers')
    .then(resp => resp.json())
    .then(json => this.setState({customerList: json, loading: false}))
  }

  renderDropDown = () => {
    if (this.state.customerList.length > 0){
      return  <>
              <CustomerList list={this.state.customerList} defaultCustomerId={this.props.defaultCustomer.id} handleChange={this.handleChange}/>
              <NewTransaction/>
              </>
    } else if (this.state.loading === false) {
      return <span> No existing customers please set up a new account: <button onClick={this.props.handleClick}>New Customer</button> </span>
    }
  }

  render() {
    return (
      <div>
        {this.renderDropDown()}
      </div>
    );
  }
}

export default ReturningCustomers;
