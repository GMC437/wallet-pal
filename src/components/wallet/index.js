import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import { currency, name } from '../../data';
import { decreaseBalance, increaseBalance } from '../../actions';
import { getBalance } from '../../reducers';
import BalanceItem from '../balance-item';

const Wallet = ({ currentBalance, decreaseBalance, increaseBalance }) => {
  let input;

  return (
    <div className={styles.walletcontainer} >
      <h1 className={styles.wallet} >Wallet</h1>
      <div className={styles.walletcard} >
        <div className={styles.name} >{name}</div>
        <BalanceItem currency={currency} currentBalance={currentBalance} isWallet={true} />
        {currentBalance < 0 ? <div>Your balance is negative</div> : <br />}
        <input
          type="number"
          className={styles.balanceinput}
          aria-label="balance amount"
          ref={node => (input = node)}
        />
        <div className={styles.buttons} >
          <button
            type="button"
            className={styles.increase}
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
            className={styles.decrease}
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
  return {
    currentBalance: getBalance(state.balanceHistory),
  };
};

export default connect(mapStateToProps, { decreaseBalance, increaseBalance })(
  Wallet
);
