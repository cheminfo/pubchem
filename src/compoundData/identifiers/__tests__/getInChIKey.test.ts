import { it, expect, describe } from 'vitest';

import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getInChIKey } from '../getInChIKey';

describe('get InChIKey', () => {
  it('bromopentane', () => {
    expect(getInChIKey(bromopentane).value).toBe('YZWKKMVJZFACSU-UHFFFAOYSA-N');
  });
  it('ethyleneglycol', () => {
    expect(getInChIKey(ethyleneglycol).value).toBe(
      'LYCAIKOWRPUZTN-UHFFFAOYSA-N',
    );
  });

  it('triethylamine', () => {
    expect(getInChIKey(triethylamine).value).toBe(
      'ZMANZCXQSJIPKH-UHFFFAOYSA-N',
    );
  });
});
