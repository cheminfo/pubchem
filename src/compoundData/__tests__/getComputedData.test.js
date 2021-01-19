import {
  getComplexity,
  getHydrogenBondAcceptorCount,
  getHydrogenBondDonorCount,
  getRotableBondCount,
  getHeavyAtomCount,
  getFormalCharge,
} from '../getComputedData.js';

import data from './test.json';

test('parsing complexity', () => {
  let result = getComplexity(data);
  expect(result).toStrictEqual({ value: 19.9 });
});

test('parsing hydrogen bond acceptor count', () => {
  let result = getHydrogenBondAcceptorCount(data);
  expect(result).toStrictEqual({ value: 0 });
});

test('parsing hydrogen bond donor count', () => {
  let result = getHydrogenBondDonorCount(data);
  expect(result).toStrictEqual({ value: 0 });
});

test('parsing  rotable bond count', () => {
  let result = getRotableBondCount(data);
  expect(result).toStrictEqual({ value: 3 });
});

test('parsing heavy atom count', () => {
  let result = getHeavyAtomCount(data);
  expect(result).toStrictEqual({ value: 6 });
});

test('parsing formal charge', () => {
  let result = getFormalCharge(data);
  expect(result).toStrictEqual({ value: 0 });
});
