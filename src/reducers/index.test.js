import { initState } from './index';

describe('reducers', () => {
  describe('balanceHistory', () => {
    it('should provide the initial state', () => {
      expect(initState.balanceHistory.length).toBe(1);
    });
  });
});
