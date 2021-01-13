import { getGHS } from '../getGHS';

import data from './test.json';

test('getGHS', () => {
  let result = getGHS(data);
  expect(result).toStrictEqual({
    pictograms: [
      {
        label: 'Flammable',
        value: 'GHS02',
      },
      {
        label: 'Irritant',
        value: 'GHS07',
      },
      {
        label: 'Environmental Hazard',
        value: 'GHS09',
      },
    ],
  });
});
