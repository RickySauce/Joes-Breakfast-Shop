import React, { Component } from 'react';
import Store from './Store'
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

  renderStore = () => {
    return this.state.store ? <Store name={this.state.store.name}/> : null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderStore()}
        </header>
      </div>
    );
  }
}

export default App;
