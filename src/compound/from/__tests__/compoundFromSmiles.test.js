import { cache } from '../../../util/cache';
import { compoundFromSmiles } from '../compoundFromSmiles';

describe('compoundFromSmiles', () => {
  it('CCCBr', async () => {
    const compound = await compoundFromSmiles('CCCBr', { cache });
    expect(compound.getCID()).toBe(7840);
    expect(compound.data.charge).toBe(0);
  });
});
