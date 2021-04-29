import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getFormula } from '../getFormula.js';

describe('get formula', () => {
  it('bromopentane', () => {
    expect(getFormula(bromopentane).value).toStrictEqual('C5H11Br');
  });
  it('ethyleneglycol', () => {
    expect(getFormula(ethyleneglycol).value).toStrictEqual('C2H6O2');
  });

  it('triethylamine', () => {
    expect(getFormula(triethylamine).value).toStrictEqual('C6H15N');
  });
});
