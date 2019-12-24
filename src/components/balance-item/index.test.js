import React from 'react';
import { shallow } from 'enzyme';
import BalanceItem from './index';

const mockData = {
  balance: 15,
  currency: '$',
};

it('BalanceItem renders correctly', () => {
  const { balance, currency } = mockData;
  const wrap = shallow(
    <BalanceItem
      currency={currency}
      currentBalance={balance}
      isWallet={false}
    />
  );

  expect(wrap.text()).toEqual(`${currency}${balance}`);
});

it('BalanceItem renders correctly with currentBalance is negative number', () => {
  const { balance, currency } = mockData;
  const wrap = shallow(
    <BalanceItem
      currency={currency}
      currentBalance={-balance}
      isWallet={false}
    />
  );

  expect(wrap.text()).toEqual(`-${currency}${balance}`);
});

it('BalanceItem renders correctly with isWallet is true', () => {
  const { balance, currency } = mockData;
  const wrap = shallow(
    <BalanceItem currency={currency} currentBalance={balance} isWallet={true} />
  );

  expect(wrap.text()).toEqual(`${currency}${balance}`);
});
