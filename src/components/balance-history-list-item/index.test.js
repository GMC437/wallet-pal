import React from 'react';
import { mount } from 'enzyme';
import BalanceHistoryListItem from './index';

const mockData = {
  index: 1,
  message: 'Test message for your balance: ',
  balance: 15,
  currency: '$',
};

it('BalanceHistoryListItem renders correctly', () => {
  const { index, message, balance, currency } = mockData;
  const wrap = mount(
    <BalanceHistoryListItem
      index={index}
      message={message}
      currency={currency}
      balance={balance}
    />
  );

  expect(wrap.text()).toEqual(`${message}${currency}${balance}`);
});
