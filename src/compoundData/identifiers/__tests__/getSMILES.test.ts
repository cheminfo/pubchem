import { it, expect, describe } from 'vitest';

import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getSMILES } from '../getSMILES';

describe('get SMILES', () => {
  it('bromopentane', () => {
    expect(getSMILES(bromopentane).value).toBe('CCCCCBr');
  });
  it('ethyleneglycol', () => {
    expect(getSMILES(ethyleneglycol).value).toBe('C(CO)O');
  });

  it('triethylamine', () => {
    expect(getSMILES(triethylamine).value).toBe('CCN(CC)CC');
  });
});
