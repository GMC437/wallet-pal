import React from 'react';
import { currency } from '../../data';
import styles from './styles.scss';
import BalanceHistoryListItem from '../balance-history-list-item';

const getAbsNumber = value => Math.abs(value);

const getListItem = (item, index) => {
  const roundedBalance = Math.round(item.amount * 100) / 100;

  if (item.id === 0) {
    return;
  } else if (item.id === 1) {
    return (
      <BalanceHistoryListItem
        key={index}
        message="Initial Amount"
        currency={currency}
        balance={item.balance}
      />
    );
  } else if (item.type === 'INCREASE_BALANCE') {
    return (
      <BalanceHistoryListItem
        key={index}
        message={`Increased by ${currency}${getAbsNumber(roundedBalance)}`}
        currency={currency}
        balance={item.balance}
      />
    );
  } else if (item.type === 'DECREASE_BALANCE') {
    return (
      <BalanceHistoryListItem
        key={index}
        message={`Decreased by ${currency}${getAbsNumber(roundedBalance)}`}
        currency={currency}
        balance={item.balance}
      />
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
    return (
      <li className={styles['list-item']}>
        You have no previous balance history
      </li>
    );
  } else {
    return detailedBalanceHistory(balanceHistory);
  }
};

const BalanceHistoryList = ({ historyData }) => {
  const reversedhistoryData = historyData.slice().reverse();
  const list = getBalanceHistoryList(reversedhistoryData);
  return <ul className={styles['balance-history-card']}>{list}</ul>;
};

export default BalanceHistoryList;
