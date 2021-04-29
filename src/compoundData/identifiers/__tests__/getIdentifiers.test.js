import triethylamine from '../../../../data/triethylamine.json';
import { getIdentifiers } from '../getIdentifiers.js';

describe('test the identifier collection', () => {
  it('triethylamine', () => {
    let result = getIdentifiers(triethylamine);
    expect(result.smiles.value).toStrictEqual('CCN(CC)CC');
    expect(result.inchiKey.value).toStrictEqual('ZMANZCXQSJIPKH-UHFFFAOYSA-N');
  });
});
