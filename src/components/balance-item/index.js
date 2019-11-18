import React from 'react';
import styles from './styles.scss';

const BalanceItem = ({ currency, currentBalance, isWallet }) => {
  const roundedBalance = Math.round(currentBalance * 100) / 100;
  const balanceString =
    roundedBalance < 0
      ? `-${currency}${Math.abs(roundedBalance)}`
      : `${currency}${roundedBalance}`;

  return <div className={isWallet? styles.balance: styles.balanceitem}  >{balanceString}</div>;
};

export default BalanceItem;
