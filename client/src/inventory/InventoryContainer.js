import React, { Component } from 'react';
import InventoryList from './InventoryList'

class InventoryContainer extends Component {


  state = {inventory: ''}

  handleClick = () => {
    fetch('/inventory')
    .then(res => res.json())
    .then(json => this.setState({inventory: json}))
  }

  renderInventoryList = () => {
    return this.state.inventory ? <InventoryList inventory={this.state.inventory.items}/> : null
  }

  render() {
    return (
      <div style={{display : 'inline-block', float:'right', marginRight:'40px', marginLeft:'40px'}}>
      <button onClick={this.handleClick}>Retrieve Inventory</button>
      {this.renderInventoryList()}
      </div>
    );
  }
}

export default InventoryContainer;
