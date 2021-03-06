import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getSMILES } from '../getSMILES.js';

describe('get SMILES', () => {
  it('bromopentane', () => {
    expect(getSMILES(bromopentane).value).toStrictEqual('CCCCCBr');
  });
  it('ethyleneglycol', () => {
    expect(getSMILES(ethyleneglycol).value).toStrictEqual('C(CO)O');
  });

  it('triethylamine', () => {
    expect(getSMILES(triethylamine).value).toStrictEqual('CCN(CC)CC');
  });
});
