import React, { Component } from 'react';
import CustomersContainer from './CustomersContainer'

class CustomersTransactionsContainer extends Component {

  state = {clicked: false}

  handleClick = () =>{
    this.setState({clicked: true})
  }

  changeClicked = () =>{
    this.setState({clicked: false})
  }

  renderButtons = () => {
    return this.state.clicked ? <CustomersContainer changeClicked={this.changeClicked}/> : <button onClick={this.handleClick}>Begin Transaction Process</button>
  }

  render() {
    return (
      <div style={{display : 'inline-block', float:'center'}}>
        {this.renderButtons()}
      </div>
    );
  }
}

export default CustomersTransactionsContainer;
