import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const BalanceItem = ({ currency, currentBalance, isWallet }) => {
  const roundedBalance = Math.round(currentBalance * 100) / 100;
  const balanceString =
    roundedBalance < 0
      ? `-${currency}${Math.abs(roundedBalance)}`
      : `${currency}${roundedBalance}`;

  return (
    <div className={isWallet ? styles['balance'] : styles['balance-item']}>
      {balanceString}
    </div>
  );
};

BalanceItem.propTypes = {
    currency: PropTypes.string.isRequired,
    currentBalance: PropTypes.number.isRequired,
    isWallet: PropTypes.bool
}

export default BalanceItem;
