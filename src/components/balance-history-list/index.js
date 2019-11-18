import React from 'react';
import { currency } from '../../data';
import styles from './styles.scss';
import BalanceItem from '../balance-item';

const getAbsNumber = value => Math.abs(value);

const getListItem = (item, index) => {
  const roundedBalance = Math.round(item.balance * 100) / 100;
  if (item.id === 0) {
    return;
  } else if (item.id === 1) {
    return (
      <li key={index} className={styles.balancehistorylistitem}>
        <div>Initial Amount</div>
        <BalanceItem currency={currency} currentBalance={item.balance} />
      </li>
    );
  } else if (item.type === 'INCREASE_BALANCE') {
    return (
      <li key={index} className={styles.balancehistorylistitem}>
        <div>
          Increased by {currency}
          {getAbsNumber(roundedBalance)}
        </div>
        <BalanceItem currency={currency} currentBalance={item.balance} />
        <br />
      </li>
    );
  } else if (item.type === 'DECREASE_BALANCE') {
    return (
      <li key={index} className={styles.balancehistorylistitem}>
        <div>
          Decreased by {currency}
          {getAbsNumber(roundedBalance)}
        </div>
        <BalanceItem currency={currency} currentBalance={item.balance} />
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
    return (
      <li className={styles.listitem}>You have no previous balance history</li>
    );
  } else {
    return detailedBalanceHistory(balanceHistory);
  }
};

const BalanceHistoryList = ({ historyData }) => {
  const list = getBalanceHistoryList(historyData.slice().reverse());
  return <ul className={styles.balancehistorycard}>{list}</ul>;
};

export default BalanceHistoryList;
