import React from 'react';

const BalanceItem = ({ currency, currentBalance }) => {
  const roundedBalance = Math.round(currentBalance * 100) / 100;
  const balanceString = roundedBalance < 0
      ? `-${currency}${Math.abs(roundedBalance)}`
      : `${currency}${roundedBalance}`;

  return <div>{balanceString}</div>;
};

export default BalanceItem;