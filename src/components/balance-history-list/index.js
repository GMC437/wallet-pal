import React from 'react';
import { currency } from '../../data';

const getAbsNumber = value => Math.abs(value);

const getListItem = (item, index) => {
  if (item.id === 0) {
    return;
  } else if (item.id === 1) {
    return (
      <li key={index}>
        <div>Initial Amount</div>
        <div>Amount: £{item.amount}</div>{' '}
      </li>
    );
  } else if (item.type === 'INCREASE_BALANCE') {
    return (
      <li key={index}>
        ITEM: {index}
        <div>
          Increased by {currency}
          {getAbsNumber(item.balance)}
        </div>
        <div>Amount: £{item.amount}</div>
        <br />
      </li>
    );
  } else if (item.type === 'DECREASE_BALANCE') {
    return (
      <li key={index}>
        ITEM: {index}
        <div>
          Decreased by {currency}
          {getAbsNumber(item.balance)}
        </div>
        <div>Amount: £{item.amount}</div>
        <br />
      </li>
    );
  }
};

const detailedBalanceHistory = balanceHistory => {
  return balanceHistory.map((item, index) => {
    return getListItem(item, index);
  });
};

const getBalanceHistoryList = balanceHistory => {
  if (balanceHistory.length === 1) {
    const { amount, balance } = balanceHistory;
    return <li>You have no previous balance history</li>;
  } else {
    return detailedBalanceHistory(balanceHistory);
  }
};

const BalanceHistoryList = ({ historyData }) => {
  const list = getBalanceHistoryList(historyData);
  return <ul>{list}</ul>;
};

export default BalanceHistoryList;
