import React from 'react';
import moment from 'moment'

const TransactionsCard = ({transaction, index}) => {

  const date = moment.utc(transaction.created_at).format("DD-MM-YYYY");

  return (
    <tr>
    {index + 1}- {date} - orders - {transaction.orders.length}
    </tr>
  );
}

export default TransactionsCard
