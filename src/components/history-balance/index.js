import React from 'react';
import { connect } from 'react-redux';

const getBalanceHistoryList = balanceHistory => {
    return balanceHistory.map((item, index) => {
      return (
        <li key={index}>
          ITEM: {index}
          <div>Balance: £{item.balance}</div>
          <div>Amount: £{item.amount}</div>
          <br />
        </li>
      );
    });
  };

const BalanceHistory = ({ balanceHistory }) => {
  const BalanceHistoryList = getBalanceHistoryList(balanceHistory);
  return (
    <div>
      <div>Balance History</div>
      <ul>
        {BalanceHistoryList}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { balanceHistory: state.balanceHistory };
};

export default connect(mapStateToProps)(BalanceHistory);
