import data from '../../../../data/bromopentane.json';
import { getComputedData } from '../getComputedData.js';

test('getComputedData', () => {
  let result = getComputedData(data);
  expect(result).toStrictEqual({
    complexity: {
      value: 19.9,
      label: 'Complexity',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    tpsa: {
      value: 0,
      label: 'Topological Polar Surface Area',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
      units: 'Å²',
    },
    xLogP3: {
      value: 3.4,
      label: 'XLogP3',
      reference: {
        description: 'Computed by XLogP3 3.0 (PubChem release 2019.06.18)',
      },
    },
    hydrogenBondDonorCount: {
      value: 0,
      label: 'Hydrogen Bond Donor Count',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    hydrogenBondAcceptorCount: {
      value: 0,
      label: 'Hydrogen Bond Acceptor Count',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    rotableBondCount: {
      value: 3,
      label: 'Rotatable Bond Count',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    heavyAtomCount: {
      value: 6,
      label: 'Heavy Atom Count',

      reference: { description: 'Computed by PubChem' },
    },
    formalCharge: {
      value: 0,
      label: 'Formal Charge',
      reference: { description: 'Computed by PubChem' },
    },
  });
});
