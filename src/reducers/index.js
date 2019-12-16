import { combineReducers } from 'redux';
import data from '../data';

export const initState = {
  balanceHistory: [{ balance: data.balance, amount: 0 }],
};

export const walletReducer = (state = initState, action) => {
  // debugger
  switch (action.type) {
    case 'INCREASE_BALANCE':
      return (state = {
        balanceHistory: [
          ...state.balanceHistory,
          {
            id: action.id,
            amount: action.amount,
            balance: action.balance + action.amount,
            type: action.type,
          },
        ],
      });

    case 'DECREASE_BALANCE':
      return (state = {
        balanceHistory: [
          ...state.balanceHistory,
          {
            id: action.id,
            amount: action.amount,
            balance: action.balance - action.amount,
            type: action.type,
          },
        ],
      });
    default:
      return state;
  }
};

export const getBalance = balanceHistory => {
  //   debugger;
  const lastItem = balanceHistory.length - 1;
  return balanceHistory[lastItem].balance;
};

export default combineReducers({
  wallet: walletReducer,
});
