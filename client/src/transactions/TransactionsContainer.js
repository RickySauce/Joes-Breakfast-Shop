import React, { Component } from 'react';
import TransactionsSearch from './TransactionsSearch'

class TransactionsContainer extends Component {

  state = {query: ''}

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/transactions?q=${this.state.query}`)
    .then(res => res.ok ? res.json() : alert("Your store has no transactions at this time, or your search has yielded no results"))
    .then(json => this.setState({transactions: json}))
  }

  render() {
    console.log(this.state)
    return (
      <div style={{display : 'inline-block', padding: '40px'}}>
        <TransactionsSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default TransactionsContainer;
