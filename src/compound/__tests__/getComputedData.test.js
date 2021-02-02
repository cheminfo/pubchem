import benzene from '../../../data/benzene.json';
import data from '../../../data/bromopentane.json';
import {
  getComplexity,
  getHydrogenBondAcceptorCount,
  getHydrogenBondDonorCount,
  getRotableBondCount,
  getHeavyAtomCount,
  getFormalCharge,
  getTPSA,
  getxLogP3,
} from '../../compoundData/getComputedData.js';

test('parsing complexity', () => {
  let result = getComplexity(data);
  expect(result).toStrictEqual({ value: 19.9 });
});

test('parsing hydrogen bond acceptor count', () => {
  let result = getHydrogenBondAcceptorCount(data);
  expect(result).toStrictEqual({ value: 0 });
});

test('parsing hydrogen bond acceptor count w references', () => {
  let result = getHydrogenBondAcceptorCount(data, { returnReferences: true });
  expect(result.references).toStrictEqual({
    53: {
      url: 'https://pubchem.ncbi.nlm.nih.gov',
      sourceName: 'PubChem',
      name: undefined,
      description: 'Data deposited in or computed by PubChem',
    },
  });
  expect(result.value).toStrictEqual(0);
});

test('parsing hydrogen bond donor count', () => {
  let result = getHydrogenBondDonorCount(data);
  expect(result).toStrictEqual({ value: 0 });
});

test('parsing  rotable bond count', () => {
  let result = getRotableBondCount(data);
  expect(result).toStrictEqual({ value: 3 });
});

test('parsing heavy atom count', () => {
  let result = getHeavyAtomCount(data);
  expect(result).toStrictEqual({ value: 6 });
});

test('parsing formal charge', () => {
  let result = getFormalCharge(data);
  expect(result).toStrictEqual({ value: 0 });
});

test('topological polar surface area', () => {
  let result = getTPSA(data);
  expect(result).toStrictEqual({ value: 0 });
});

test('parsing xlogp3', () => {
  let result = getxLogP3(benzene);
  expect(result).toStrictEqual({ value: 2.1 });
});
