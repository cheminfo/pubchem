import { it, expect, describe } from 'vitest';

import { cache } from '../../../util/cache';
import { compoundFromName } from '../compoundFromName';

describe('compoundFromName', () => {
  it('50-01-1', async () => {
    const compound = await compoundFromName('50-01-1', { cache });
    expect(compound.getCID()).toBe(5742);
    expect(compound.data.charge).toBe(0);
    expect((await compound.getData()).getInChIKey().value).toBe(
      'PJJJBBJSCAKJQF-UHFFFAOYSA-N',
    );
  });

  it('benzene', async () => {
    const compound = await compoundFromName('benzene', { cache });
    expect(compound.getCID()).toBe(241);
    expect(compound.data.charge).toBe(0);
    expect((await compound.getData()).getInChIKey().value).toBe(
      'UHOVQNZJYSORNB-UHFFFAOYSA-N',
    );
  });

  it('COOOOOOOOOOC', async () => {
    await expect(compoundFromName('COOOOOOOOOOC', { cache })).rejects.toThrow(
      'No compound found',
    );
  });
});
