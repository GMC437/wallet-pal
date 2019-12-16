import React from 'react';
import styles from './styles.scss';
import BalanceItem from '../balance-item';

const BalanceHistoryListItem = ({ index, message, currency, balance }) => {
  return (
    <li key={index} className={styles['balance-history-list-item']}>
      <div>{message}</div>
      <BalanceItem currency={currency} currentBalance={balance} />
      <br />
    </li>
  );
};

export default BalanceHistoryListItem;
