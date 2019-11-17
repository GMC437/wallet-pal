import { combineReducers } from 'redux';
import data from '../data';

export const initState = {
  balanceHistory: [{ balance: data.balance, amount: 0, id: 0 }],
};

export const balanceHistoryReducer = (
  state = initState.balanceHistory,
  action
) => {
  switch (action.type) {
    case 'INCREASE_BALANCE':
      return [
        ...state,
        {
          id: action.id,
          amount: action.amount,
          balance: action.balance + action.amount,
          type: action.type,
        },
      ];
    case 'DECREASE_BALANCE':
      return [
        ...state,
        {
          id: action.id,
          amount: action.amount,
          balance: action.balance - action.amount,
          type: action.type,
        },
      ];
    default:
      return state;
  }
};

export const getBalance = state => {
  const lastItem = state.length - 1;
  return state[lastItem].balance;
};

export default combineReducers({
  balanceHistory: balanceHistoryReducer,
});
