import React from 'react';
import PropTypes from 'prop-types';
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

BalanceHistoryListItem.propTypes = {
    index: PropTypes.number, 
    message: PropTypes.string.isRequired, 
    currency: PropTypes.string.isRequired, 
    balance: PropTypes.number.isRequired
}

export default BalanceHistoryListItem;
