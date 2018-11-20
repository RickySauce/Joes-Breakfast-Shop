import React, { Component } from 'react';
import moment from 'moment'

class TransactionsCard extends Component{

  state = {
    date: moment.utc(this.props.transaction.created_at).format("DD-MM-YYYY"),
    bacon: this.props.transaction.total_type_and_quantity["bacon"] ? this.props.transaction.total_type_and_quantity["bacon"] : 0,
    egg: this.props.transaction.total_type_and_quantity["egg"] ? this.props.transaction.total_type_and_quantity["egg"] : 0,
    cheese: this.props.transaction.total_type_and_quantity["cheese"] ? this.props.transaction.total_type_and_quantity["cheese"] : 0
  }

  render(){
    return (
      <tr>
      {this.props.index + 1}- {this.state.date} - orders: {this.props.transaction.orders.length} - TOTALS - bacon: {this.state.bacon} eggs: {this.state.egg} cheese: {this.state.cheese}
      </tr>
    );
  };
}

export default TransactionsCard
