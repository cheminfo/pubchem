import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { test, expect } from 'vitest';

import benzene from '../../../../data/benzene.json';
import { getFlashPoint } from '../getFlashPoint';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('getFlashPoint', () => {
  const results = getFlashPoint(benzene, {
    temperature: { targetUnits: '°C' },
  });
  expect(results).toHaveLength(6);
  expect(results[0].reference.sourceName).toBe('CAMEO Chemicals');
  delete results[0].data.parsed.high;
  expect(results[0].data).toBeDeepCloseTo({
    original: '12 °F (NTP, 1992)',
    parsed: { low: -11.1111111111, units: '°C' },
  });
});
