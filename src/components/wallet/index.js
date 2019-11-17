import React from 'react';
import { connect } from 'react-redux';
import { currency, name } from '../../data';
import { decreaseBalance, increaseBalance } from '../../actions';
import { getBalance } from '../../reducers';
import BalanceItem from '../balance-item';

const Wallet = ({ currentBalance, decreaseBalance, increaseBalance }) => {
  let input;

  return (
    <div>
      Wallet
      <div>
        <div>{name}</div>
        <BalanceItem currency={currency} currentBalance={currentBalance} />
        {currentBalance < 0 ? <div>Your balance is negative</div> : <br />}
        <input
          type="number"
          aria-label="balance amount"
          ref={node => (input = node)}
        />
        <div>
          <button
            type="button"
            onClick={() => {
              if (!input.value) {
                return;
              }
              increaseBalance(parseFloat(input.value), currentBalance);
            }}
          >
            Increase
          </button>
          <button
            type="button"
            onClick={() => {
              if (!input.value) {
                return;
              }
              decreaseBalance(parseFloat(input.value), currentBalance);
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    currentBalance: getBalance(state.balanceHistory),
  };
};

export default connect(mapStateToProps, { decreaseBalance, increaseBalance })(
  Wallet
);
