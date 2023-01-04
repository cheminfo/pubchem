import { test, expect } from 'vitest';

import benzene from '../../../../data/benzene.json';
import { getRefractiveIndex } from '../getRefractiveIndex';

test('getRefractiveIndex', () => {
  const results = getRefractiveIndex(benzene);
  expect(results).toHaveLength(1);
  expect(results[0].reference.sourceName).toBe(
    'Hazardous Substances Data Bank (HSDB)',
  );
  expect(results[0].data).toStrictEqual({
    original: 'Index of refraction: 1.5011 at 20 °C/D',
    parsed: {
      value: { low: 1.5011, high: undefined, units: undefined },
      temperature: { low: 20, high: undefined, units: '°C' },
    },
  });
});
