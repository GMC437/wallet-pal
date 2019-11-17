import React from 'react';
import styles from './app.scss';
import Wallet from '../wallet';

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Wallet />
      </div>
    );
  }
}

export default App;
