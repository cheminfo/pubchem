import { test, expect } from 'vitest';

import benzene from '../../../../data/benzene.json';
import { getMeltingPoint } from '../getMeltingPoint.js';

test('getMeltingPoint', () => {
  let results = getMeltingPoint(benzene, {
    temperature: { targetUnits: '°C' },
  });
  expect(results).toHaveLength(7);
  expect(results[0].reference.sourceName).toBe('CAMEO Chemicals');
  expect(results[0].data).toStrictEqual({
    original: '41.9 °F (NTP, 1992)',
    parsed: { low: 5.5, high: undefined, units: '°C' },
  });
});
