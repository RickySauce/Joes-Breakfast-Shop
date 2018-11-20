import React from 'react';
import TransactionCard from './TransactionCard'

const TransactionsList = ({transactions}) => {

  const mapTransactions = () => {
    return transactions ? transactions.map((transaction, index) => <TransactionCard key={transaction.id} transaction={transaction} index={index}/>) : null
  }


  return (
    <table>
      <tbody>
        {mapTransactions()}
        </tbody>
    </table>
  );
}

export default TransactionsList
