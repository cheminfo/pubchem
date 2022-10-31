import { expect, test } from 'vitest';

import benzene from '../../../../data/benzene.json';
import { getBoilingPoint } from '../getBoilingPoint.js';

test('getBoilingPoint', () => {
  let result = getBoilingPoint(benzene, {
    pressure: { targetUnits: 'mmHg' },
    temperature: { targetUnits: '°C' },
  });

  expect(result).toHaveLength(6);
  expect(result[0].reference.sourceName).toBe('CAMEO Chemicals');

  expect(result[1].data).toStrictEqual({
    original: '80.0 °C',
    parsed: {
      temperature: { low: 80, high: undefined, units: '°C' },
      pressure: { low: 760, high: undefined, units: 'mmHg' },
    },
  });
});
