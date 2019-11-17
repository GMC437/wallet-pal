import React from 'react';
import { connect } from 'react-redux';
import BalanceHistoryList from '../balance-history-list';

const BalanceHistory = ({ balanceHistory }) => {
  return (
    <div>
      <div>Balance History</div>
      <BalanceHistoryList historyData={balanceHistory} />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { balanceHistory: state.balanceHistory };
};

export default connect(mapStateToProps)(BalanceHistory);
