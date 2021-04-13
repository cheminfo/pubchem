import { cache } from '../../../util/cache.js';
import { compoundFromSmiles } from '../compoundFromSmiles.js';

describe('compoundFromSmiles', () => {
  it('CCCBr', async () => {
    const compound = await compoundFromSmiles('CCCBr', { cache });
    expect(compound.getCID()).toBe(7840);
    expect(compound.data.charge).toBe(0);
  });

  it('COOOOOOOOOOC', async () => {
    await expect(compoundFromSmiles('COOOOOOOOOOC', { cache })).rejects.toThrow(
      'No compound found',
    );
  });
});
