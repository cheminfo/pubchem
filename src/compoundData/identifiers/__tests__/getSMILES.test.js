import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getSMILES } from '../getSMILES.js';

describe('get SMILES', () => {
  it('bromopentane', () => {
    expect(getSMILES(bromopentane)).toStrictEqual('CCCCCBr');
  });
  it('ethyleneglycol', () => {
    expect(getSMILES(ethyleneglycol)).toStrictEqual('C(CO)O');
  });

  it('triethylamine', () => {
    expect(getSMILES(triethylamine)).toStrictEqual('CCN(CC)CC');
  });
});
