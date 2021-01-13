import { cache } from '../../../util/cache';
import { compoundDataFromCID } from '../compoundDataFromCID';

describe('compoundDataFromCID', () => {
  it('8037', async () => {
    const compoundData = await compoundDataFromCID('8037', { cache });
    expect(compoundData.data.RecordType).toBe('CID');
  });
});
