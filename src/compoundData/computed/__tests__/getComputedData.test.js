import data from '../../../../data/bromopentane.json';
import { getComputedData } from '../getComputedData.js';

test('getComputedData', () => {
  let result = getComputedData(data);
  expect(result).toStrictEqual({
    complexity: {
      value: 19.9,
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    tpsa: {
      value: 0,
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
      units: 'Å²',
    },
    xLogP3: {
      value: 3.4,
      reference: {
        description: 'Computed by XLogP3 3.0 (PubChem release 2019.06.18)',
      },
    },
    hydrogenBondDonorCount: {
      value: 0,
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    getHydrogenBondAcceptorCount: {
      value: 0,
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    rotableBondCount: {
      value: 3,
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    heavyAtomCount: {
      value: 6,
      reference: { description: 'Computed by PubChem' },
    },
    formalCharge: {
      value: 0,
      reference: { description: 'Computed by PubChem' },
    },
  });
});
