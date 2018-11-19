import React, { Component } from 'react';
import StoreName from './StoreName'
import CustomersContainer from './customers/CustomersContainer'
import './App.css';

class App extends Component {

  state = {}

  componentDidMount(){
    this.fetchStore()
  }

  fetchStore = () => {
    fetch('/store')
    .then(resp => resp.json())
    .then(json => this.setState({store: json}))
  }

  renderStoreName = () => {
    return this.state.store ? <StoreName name={this.state.store.name}/> : null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderStoreName()}
          <CustomersContainer/>
        </header>
      </div>
    );
  }
}

export default App;
