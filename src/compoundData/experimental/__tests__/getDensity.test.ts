import { expect, test } from 'vitest';

import benzene from '../../../../data/benzene.json';
import { getDensity } from '../getDensity';

test('getDensity', () => {
  const results = getDensity(benzene, {
    temperature: { targetUnits: '°C' },
  });

  expect(results).toHaveLength(6);
  expect(results[0].reference.sourceName).toBe('CAMEO Chemicals');
  expect(results[0].data).toStrictEqual({
    original: '0.879 at 68 °F (USCG, 1999) - Less dense than water; will float',
    parsed: {
      value: { low: 0.879, high: undefined, units: undefined },
      temperature: { low: 20.000000000000057, high: undefined, units: '°C' },
    },
  });
});
