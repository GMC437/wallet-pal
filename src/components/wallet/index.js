import React from 'react';
import { connect } from 'react-redux';
import { currency, name } from '../../data';
import { decreaseBalance, increaseBalance } from '../../actions';
import { getBalance } from '../../reducers';

const Wallet = ({ currentBalance, decreaseBalance, increaseBalance }) => {
  const roundedBalance = Math.round(currentBalance * 100) / 100;
  const balanceItem =
    currentBalance < 0
      ? `-${currency}${Math.abs(roundedBalance)}`
      : `${currency}${roundedBalance}`;
  let input;

  return (
    <div>
      Wallet
      <div>
        <div>{name}</div>
        <div>{balanceItem}</div>
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
