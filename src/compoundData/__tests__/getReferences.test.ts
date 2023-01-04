import { test, expect } from 'vitest';

import data from '../../../data/bromopentane.json';
import { getReferences } from '../getReferences';

test('reference parsing', () => {
  let result = getReferences(data);
  expect(Object.keys(result)).toHaveLength(60);
  expect(result['47']).toStrictEqual({
    url: 'https://spectrabase.com/spectrum/3N44HGBcQLq',
    sourceName: 'SpectraBase',
    name: '1-Bromopentane',
    description:
      'Wiley Science Solutions (https://sciencesolutions.wiley.com) is a leading publisher of spectral databases and KnowItAll spectroscopy software. SpectraBase provides fast text access to hundreds of thousands of NMR, IR, Raman, UV-Vis, and mass spectra.',
  });
});
