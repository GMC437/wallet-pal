import React from 'react';
import { balance, currency, name } from '../../data';

const currentBalance =
  balance < 0 ? `-${currency}${Math.abs(balance)}` : `${currency}${balance}`;

const Wallet = () => {
  return (
    <div>
      Wallet
      <div>
        <div>{name}</div>
        <div>{currentBalance}</div>
        <div>Your balance is negative</div>
        <input type="number" aria-label="balance amount" />
        <div>
          <button type="button">Increase</button>
          <button type="button">Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
