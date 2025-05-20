import { expect, test } from 'vitest';

import data from '../../../data/bromopentane.json';
import { getReferences } from '../getReferences';

test('reference parsing', () => {
  const result = getReferences(data);
  expect(Object.keys(result)).toHaveLength(52);
  expect(result['47']).toStrictEqual({
    url: 'https://comptox.epa.gov/dashboard/chemical-lists/',
    sourceName: 'EPA DSSTox',
    name: 'CompTox Chemicals Dashboard Chemical Lists',
    description:
      'This classification lists the chemical categories from the EPA CompTox Chemicals Dashboard.',
  });
});
