import { cache } from '../../../util/cache.js';
import { compoundDataFromCID } from '../compoundDataFromCID.js';

describe('compoundDataFromCID', () => {
  it('8037', async () => {
    const compoundData = await compoundDataFromCID('8037', { cache });
    expect(compoundData.data.RecordType).toBe('CID');
  });
});
