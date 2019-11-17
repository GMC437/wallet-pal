import { combineReducers } from 'react-redux';
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
        },
      ];
    case 'DECREASE_BALANCE':
      return [
        ...state,
        {
          id: action.id,
          amount: action.amount,
          balance: action.balance - action.amount,
        },
      ];
    default:
      return state;
  }
};

export default combineReducers({
  balanceHistory: balanceHistoryReducer,
});
