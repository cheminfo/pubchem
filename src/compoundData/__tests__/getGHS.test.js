import { getGHS } from '../getGHS.js';

import data from './test.json';

test('getGHS', () => {
  let result = getGHS(data);
  expect(result).toHaveProperty('hCodes');
  expect(result).toHaveProperty('pCodes');
  expect(result).toHaveProperty('detail');
  expect(result).toHaveProperty('pictograms');
});
