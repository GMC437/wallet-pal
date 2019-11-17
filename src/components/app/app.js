import React from 'react';
import styles from './app.scss';
import Wallet from '../wallet';
import HistoryBalance from '../history-balance'; 

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Wallet />
        <HistoryBalance />
      </div>
    );
  }
}

export default App;
