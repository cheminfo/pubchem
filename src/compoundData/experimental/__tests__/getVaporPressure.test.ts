import { test, expect } from 'vitest';

import benzene from '../../../../data/benzene.json';
import { getVaporPressure } from '../getVaporPressure';

test('getVaporPressure', () => {
  const results = getVaporPressure(benzene);
  expect(results).toHaveLength(6);

  expect(results[0].reference.sourceName).toBe('CAMEO Chemicals');
  expect(results[0].data).toStrictEqual({
    original: '60 mm Hg at 59 °F ; 76 mm Hg at 68° F (NTP, 1992)',
    parsed: { error: 'Error: Can not parseNumbersUnits of: 59 °F ; 76 mm Hg' },
  });
});
