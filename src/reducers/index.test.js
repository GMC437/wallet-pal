import { initState, walletReducer, getBalance } from './index';

const mockData = {
  id: 1,
  amount: 1,
  balance: 12,
};

describe('reducers', () => {
  describe('balanceHistoryReducer', () => {
    it('should provide the initial state', () => {
      expect(initState.balanceHistory.length).toBe(1);
    });

    it('should handle INCREASE_BALANCE action', () => {
      const data = { ...mockData, type: 'INCREASE_BALANCE' };
      const { balanceHistory } = walletReducer(initState, data);
        
      expect(balanceHistory.length).toBe(2);
      expect(balanceHistory[1].balance).toBe(13);
    });

    it('should handle DECREASE_BALANCE action', () => {
      const data = { ...mockData, type: 'DECREASE_BALANCE' };
      const { balanceHistory } = walletReducer(initState, data);

      expect(balanceHistory.length).toBe(2);
      expect(balanceHistory[1].balance).toBe(11);
    });

    it('should ignore unknown actions', () => {
      const data = { ...mockData, type: 'fake' };
      const { balanceHistory } = walletReducer(initState, data);

      expect(balanceHistory.length).toBe(1);
      expect(balanceHistory[0].balance).toBe(12);
    });
  });

  describe('utils function', () => {
    it('should handle getBalance', () => {
      expect(getBalance(initState.balanceHistory)).toBe(12);
    });
  });
});
