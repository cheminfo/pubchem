import { CompoundData } from '../CompoundData.js';

import benzene from './benzene.json';
import data from './test.json';

test('creating a compound data object', () => {
  let cd = new CompoundData(benzene);
  let lp = cd.getFlashPoint();
  expect(lp.summary).toStrictEqual({
    mean: 6.666666666666667,
    median: 6.666666666666667,
    standardDeviation: 0,
  });

  cd = new CompoundData(data);
  let result = cd.getComplexity();
  expect(result).toStrictEqual({ value: 19.9 });
});
