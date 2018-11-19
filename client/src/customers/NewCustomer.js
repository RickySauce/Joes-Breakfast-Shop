import React, { Component } from 'react';

class NewCustomer extends Component {

  state = {}

  handleChange = (event) => {
     this.setState({
       [event.target.id]: event.target.value
     })
   }

   handleSubmit = (event) => {
    event.preventDefault()
    let data = JSON.stringify({customer: this.state.customer})
      fetch('/customers', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(json => this.props.customerCreated(json))
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
       onChange={this.handleChange}
       id="customer"
       placeholder="customer name"
       type="text"/><br/>
       <input type="submit" value="Create Customer"/>
      </form>
    );
  }
}

export default NewCustomer;
