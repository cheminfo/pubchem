import { it, expect, describe } from 'vitest';

import triethylamine from '../../../../data/triethylamine.json';
import { getIdentifiers } from '../getIdentifiers';

describe('test the identifier collection', () => {
  it('triethylamine', () => {
    let result = getIdentifiers(triethylamine);
    expect(result.smiles.value).toBe('CCN(CC)CC');
    expect(result.inchiKey.value).toBe('ZMANZCXQSJIPKH-UHFFFAOYSA-N');
  });
});
