import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getInChI } from '../getInChI.js';

describe('get InChI', () => {
  it('bromopentane', () => {
    expect(getInChI(bromopentane).value).toStrictEqual(
      'InChI=1S/C5H11Br/c1-2-3-4-5-6/h2-5H2,1H3',
    );
  });
  it('ethyleneglycol', () => {
    expect(getInChI(ethyleneglycol).value).toStrictEqual(
      'InChI=1S/C2H6O2/c3-1-2-4/h3-4H,1-2H2',
    );
  });

  it('triethylamine', () => {
    expect(getInChI(triethylamine).value).toStrictEqual(
      'InChI=1S/C6H15N/c1-4-7(5-2)6-3/h4-6H2,1-3H3',
    );
  });
});
