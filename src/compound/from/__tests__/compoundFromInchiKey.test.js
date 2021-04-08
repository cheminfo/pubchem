import { cache } from '../../../util/cache.js';
import { compoundFromInchiKey } from '../compoundFromInchiKey.js';

describe('compoundFromSmiles', () => {
  it('N2', async () => {
    const compound = await compoundFromInchiKey('IJGRMHOSHXDMSA-UHFFFAOYSA-N', {
      cache,
    });
    expect(compound.getCID()).toBe(947);
    expect(compound.data.charge).toBe(0);
  });
});
