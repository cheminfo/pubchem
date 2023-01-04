import { test, expect } from 'vitest';

import benzene from '../../../../data/benzene.json';
import { getSolubility } from '../getSolubility';

test('getSolubility', () => {
  const results = getSolubility(benzene);
  expect(results).toHaveLength(8);
  expect(results[0].reference.sourceName).toBe('CAMEO Chemicals');
  expect(results[0].data).toStrictEqual({
    original: '1 to 5 mg/mL at 64° F (NTP, 1992)',
  });
});
