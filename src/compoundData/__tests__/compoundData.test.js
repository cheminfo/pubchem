import { CompoundData } from '../CompoundData.js';

import benzene from './benzene.json';

describe('CompoundData', () => {
  let compoundData = new CompoundData(benzene);
  it('creating a compound data object', () => {
    let flashPoint = compoundData.getFlashPoint();
    expect(flashPoint.summary).toStrictEqual({
      mean: 6.666666666666667,
      median: 6.666666666666667,
      standardDeviation: 0,
    });
  });

  it('toJSON', () => {
    const result = compoundData.toJSON();
    expect(Object.keys(result)).toStrictEqual([
      'ghs',
      'boilingPoint',
      'meltingPoint',
      'vaporPressure',
      'solubility',
      'flashPoint',
    ]);
  });
});
