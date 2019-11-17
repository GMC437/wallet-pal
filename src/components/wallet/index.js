import React from 'react';
import { connect } from 'react-redux';
import { balance, currency, name } from '../../data';
import { decreaseBalance, increaseBalance } from '../../actions';
import { getBalance } from '../../reducers';


const Wallet = ({ currentBalance, decreaseBalance, increaseBalance }) => {
    const balanceItem = currentBalance < 0 ? `-${currency}${Math.abs(currentBalance)}` : `${currency}${currentBalance}`;
  
    return (
    <div>
      Wallet
      <div>
        <div>{name}</div>
        <div>{balanceItem}</div>
        {currentBalance < 0 ?<div>Your balance is negative</div>: <br/>}
        <input type="number" aria-label="balance amount" />
        <div>
          <button type="button" onClick={() => increaseBalance(5, currentBalance)} >Increase</button>
          <button type="button" onClick={() => decreaseBalance(5, currentBalance)} >Decrease</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentBalance: getBalance(state.balanceHistory)
    }
}

export default connect(mapStateToProps, { decreaseBalance, increaseBalance })(Wallet);
