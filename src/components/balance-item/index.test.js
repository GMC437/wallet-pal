import React from 'react';
import { shallow } from 'enzyme';
import BalanceItem from './index';

it('BalanceItem renders correctly', () => {
  const wrap = shallow(
    <BalanceItem currency="$" currentBalance={15} isWallet={false} />
  );

  expect(wrap.text()).toEqual('$15');
});

it('BalanceItem renders correctly with currentBalance is negative number', () => {
  const wrap = shallow(
    <BalanceItem currency="$" currentBalance={-15} isWallet={false} />
  );

  expect(wrap.text()).toEqual('-$15');
});

it('BalanceItem renders correctly with isWallet is true', () => {
  const wrap = shallow(
    <BalanceItem currency="$" currentBalance={15} isWallet={true} />
  );

  expect(wrap.text()).toEqual('$15');
});
