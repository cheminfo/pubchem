import { CompoundData } from '../CompoundData.js';

import benzene from './benzene.json';
import data from './test.json';

describe('CompoundData', () => {
  let compoundData = new CompoundData(benzene);
  it('creating a compound data object', () => {
    let flashPoint = compoundData.getFlashPoint();
    expect(flashPoint.summary).toStrictEqual({
      mean: 6.666666666666667,
      median: 6.666666666666667,
      standardDeviation: 0,
    });
    compoundData = new CompoundData(data);
    let result = compoundData.complexity;
    expect(result).toStrictEqual({ value: 19.9 });
  });

  it('toJSON', () => {
    const result = compoundData.toJSON();
    console.log(result)
    expect(Object.keys(result)).toStrictEqual(['ghs', 'complexity', 'boilingPoint', 'meltingPoint'])
  });
});
