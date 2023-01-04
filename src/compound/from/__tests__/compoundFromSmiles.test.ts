import { it, expect, describe } from 'vitest';

import { cache } from '../../../util/cache.js';
import { compoundFromSmiles } from '../compoundFromSmiles.js';

describe('compoundFromSmiles', () => {
  it('CCCBr', async () => {
    const compound = await compoundFromSmiles('CCCBr', { cache });
    expect(compound.getCID()).toBe(7840);
    expect(compound.data.charge).toBe(0);
    expect((await compound.getData()).getInChIKey().value).toBe(
      'CYNYIHKIEHGYOZ-UHFFFAOYSA-N',
    );
  });

  it('c1ccccc1', async () => {
    const compound = await compoundFromSmiles('c1ccccc1', { cache });
    expect(compound.getCID()).toBe(241);
    expect(compound.data.charge).toBe(0);
    expect((await compound.getData()).getInChIKey().value).toBe(
      'UHOVQNZJYSORNB-UHFFFAOYSA-N',
    );
  });

  it('COOOOOOOOOOC', async () => {
    await expect(compoundFromSmiles('COOOOOOOOOOC', { cache })).rejects.toThrow(
      'No compound found',
    );
  });
});
