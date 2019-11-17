let balanceHistoryId = 1;

export const increaseBalance = (amount, balance) => {
  // Return an action
  return {
    type: 'INCREASE_BALANCE',
    id: balanceHistoryId++,
    amount,
    balance,
  };
};

export const decreaseBalance = (amount, balance) => {
  // Return an action
  return {
    type: 'DECREASE_BALANCE',
    id: balanceHistoryId++,
    amount,
    balance,
  };
};
