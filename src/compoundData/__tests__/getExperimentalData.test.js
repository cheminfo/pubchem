import {
  getBoilingPoint,
  getMeltingPoint,
  getSolubility,
} from '../getExperimentalData.js';

import data from './test.json';

test('parsing experimental boiling point', () => {
  let result = getBoilingPoint(data);
  expect(result.summary).toStrictEqual({
    mean: 129.8,
    median: 129.8,
    standardDeviation: NaN,
  });
});

test('parsing experimental melting point', () => {
  let result = getMeltingPoint(data);
  expect(result.summary).toStrictEqual({
    mean: -95,
    median: -95,
    standardDeviation: NaN,
  });
});

test('parsing experimental solubility', () => {
  let result = getSolubility(data);
  expect(result.summary).toStrictEqual({
    mean: 0.000841,
    median: 0.000841,
    standardDeviation: NaN,
  });
});
