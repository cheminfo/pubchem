import { cache } from '../../../util/cache.js';
import { compoundFromSmiles } from '../compoundFromSmiles.js';

describe('compoundFromSmiles', () => {
  it('CCCBr', async () => {
    const compound = await compoundFromSmiles('CCCBr', { cache });
    expect(compound.getCID()).toBe(7840);
    expect(compound.data.charge).toBe(0);
  });
});
