import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import BalanceHistoryList from '../balance-history-list';

const BalanceHistory = state => {
  return (
    <div className={styles['balance-history-container']}>
      <h2 className={styles['balance-history']}>Balance History</h2>
      <BalanceHistoryList historyData={state.balanceHistory} />
    </div>
  );
};

const mapStateToProps = ({ wallet }) => {
  return { balanceHistory: wallet.balanceHistory };
};

export default connect(mapStateToProps)(BalanceHistory);
