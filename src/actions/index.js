let balanceHistoryId = 1;
export const increaseBalance = (amount, balance) => {
  // Return an action
  return {
    id: balanceHistoryId++,
    type: 'INCREASE_BALANCE',
    amount,
    balance,
  };
};

export const decreaseBalance = (amount, balance) => {
  // Return an action
  return {
    id: balanceHistoryId++,
    type: 'DECREASE_BALANCE',
    amount,
    balance,
  };
};
