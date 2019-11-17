import { decreaseBalance, increaseBalance } from './index';

const mockData = {
  id: 1,
  amount: 1,
  balance: 12,
};

describe('balance actions', () => {
  it('increaseBalance should create INCREASE_BALANCE action', () => {
    const { amount, balance } = mockData;

    expect(increaseBalance(amount, balance)).toEqual({
      type: 'INCREASE_BALANCE',
      id: 1,
      amount,
      balance,
    });
  });

  it('decreaseBalance should create DECREASE_BALANCE action', () => {
    const { amount, balance } = mockData;

    expect(decreaseBalance(amount, balance)).toEqual({
      type: 'DECREASE_BALANCE',
      id: 2,
      amount,
      balance,
    });
  });
});
