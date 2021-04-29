import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getInChIKey } from '../getInChIKey.js';

describe('get InChI key', () => {
  it('bromopentane', () => {
    expect(getInChIKey(bromopentane).value).toStrictEqual(
      'YZWKKMVJZFACSU-UHFFFAOYSA-N',
    );
  });
  it('ethyleneglycol', () => {
    expect(getInChIKey(ethyleneglycol).value).toStrictEqual(
      'LYCAIKOWRPUZTN-UHFFFAOYSA-N',
    );
  });

  it('triethylamine', () => {
    expect(getInChIKey(triethylamine).value).toStrictEqual(
      'ZMANZCXQSJIPKH-UHFFFAOYSA-N',
    );
  });
});
