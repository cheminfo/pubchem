import {
  getBoilingPoint,
  getMeltingPoint,
  getSolubility,
  getFlashPoint,
} from '../getExperimentalData.js';

import benzene from './benzene.json';
import data from './test.json';

test('parsing experimental boiling point', () => {
  let result = getBoilingPoint(data);
  expect(result.summary).toStrictEqual({
    mean: 129.8,
    median: 129.8,
    standardDeviation: NaN,
  });
});

test('parsing experimental boiling point benzene', () => {
  let result = getBoilingPoint(benzene);
  expect(result.summary).toStrictEqual({
    mean: 87.14933333333333,
    median: 80.08,
    standardDeviation: 9.75324680349455,
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

test('parsing flash point', () => {
  let result = getFlashPoint(benzene);
  expect(result.summary).toStrictEqual({
    mean: 6.666666666666667,
    median: 6.666666666666667,
    standardDeviation: 0,
  });
});
