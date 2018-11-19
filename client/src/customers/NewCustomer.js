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

  };

  render() {
    return (
      <form>
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
