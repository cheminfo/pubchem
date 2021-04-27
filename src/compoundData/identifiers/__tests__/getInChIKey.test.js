import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getInChIKey } from '../getInChIKey.js';

describe('get InChI', () => {
  it('bromopentane', () => {
    expect(getInChIKey(bromopentane)).toStrictEqual(
      'YZWKKMVJZFACSU-UHFFFAOYSA-N',
    );
  });
  it('ethyleneglycol', () => {
    expect(getInChIKey(ethyleneglycol)).toStrictEqual(
      'LYCAIKOWRPUZTN-UHFFFAOYSA-N',
    );
  });

  it('triethylamine', () => {
    expect(getInChIKey(triethylamine)).toStrictEqual(
      'ZMANZCXQSJIPKH-UHFFFAOYSA-N',
    );
  });
});
