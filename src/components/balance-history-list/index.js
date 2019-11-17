import React from 'react';

const getBalanceHistoryList = balanceHistory => {
  return balanceHistory.map((item, index) => {
    return (
      <li key={index}>
        ITEM: {index}
        <div>Balance: £{item.balance}</div>
        <div>Amount: £{item.amount}</div>
        <br />
      </li>
    );
  });
};

const BalanceHistoryList = ({ historyData }) => {
  const list = getBalanceHistoryList(historyData);
  return <ul>{list}</ul>;
};

export default BalanceHistoryList;
