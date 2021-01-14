import { getGHS } from '../getGHS';

import data from './test.json';

test('getGHS', () => {
  let result = getGHS(data);
  expect(result).toStrictEqual({
    pictograms: [
      {
        label: 'Flammable',
        url: 'https://pubchem.ncbi.nlm.nih.gov/images/ghs/GHS02.svg',

        value: 'GHS02',
      },
      {
        label: 'Irritant',
        url: 'https://pubchem.ncbi.nlm.nih.gov/images/ghs/GHS07.svg',

        value: 'GHS07',
      },
      {
        label: 'Environmental Hazard',
        url: 'https://pubchem.ncbi.nlm.nih.gov/images/ghs/GHS09.svg',

        value: 'GHS09',
      },
    ],
  });
});
