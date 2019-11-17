import { initState, balanceHistoryReducer } from './index';

const mockData = {
  id: 1,
  amount: 1,
  balance: 12,
};

describe('reducers', () => {
  const { balanceHistory } = initState;

  describe('balanceHistoryReducer', () => {
    it('should provide the initial state', () => {
      expect(balanceHistory.length).toBe(1);
    });

    it('should handle INCREASE_BALANCE action', () => {
      const data = { ...mockData, type: 'INCREASE_BALANCE' };
      const balanceArr = balanceHistoryReducer(balanceHistory, data);
      
      expect(balanceArr.length).toBe(2);
      expect(balanceArr[1].balance).toBe(13);
    });

    it('should handle DECREASE_BALANCE action', () => {
      const data = { ...mockData, type: 'DECREASE_BALANCE' };
      const balanceArr = balanceHistoryReducer(balanceHistory, data);

      expect(balanceArr.length).toBe(2);
      expect(balanceArr[1].balance).toBe(11);
    });

    it('should ignore unknown actions', () => {
      const data = { ...mockData, type: 'fake' };
      const balanceArr = balanceHistoryReducer(balanceHistory, data);
      
      expect(balanceArr.length).toBe(1);
      expect(balanceArr[0].balance).toBe(12);
    });
  });
});
