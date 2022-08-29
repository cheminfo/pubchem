import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getFormula } from '../getFormula.js';

describe('get formula', () => {
  it('bromopentane', () => {
    expect(getFormula(bromopentane).value).toBe('C5H11Br');
  });
  it('ethyleneglycol', () => {
    expect(getFormula(ethyleneglycol).value).toBe('C2H6O2');
  });

  it('triethylamine', () => {
    expect(getFormula(triethylamine).value).toBe('C6H15N');
  });
});
