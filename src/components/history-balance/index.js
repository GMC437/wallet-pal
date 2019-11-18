import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import BalanceHistoryList from '../balance-history-list';

const BalanceHistory = ({ balanceHistory }) => {
  return (
    <div className={styles.balancehistorycontainer}>
      <h2 className={styles.balancehistory}>Balance History</h2>
      <BalanceHistoryList historyData={balanceHistory} />
    </div>
  );
};

const mapStateToProps = state => {
  return { balanceHistory: state.balanceHistory };
};

export default connect(mapStateToProps)(BalanceHistory);
