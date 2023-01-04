import { test, expect } from 'vitest';

import data from '../../../../data/bromopentane.json';
import { getComputedData } from '../getComputedData';

test('getComputedData', () => {
  let result = getComputedData(data);
  expect(result).toStrictEqual({
    complexity: {
      value: 19.9,
      label: 'Complexity',
      description:
        'The complexity rating of a compound is a rough estimate of how complicated a structure is, seen from both the point of view of the elements contained and the displayed structural features including symmetry. This complexity rating is computed using the Bertz/Hendrickson/Ihlenfeldt formula.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    tpsa: {
      value: 0,
      label: 'Topological Polar Surface Area',
      description:
        'The topological polar surface area (TPSA) of a molecule is defined as the surface sum over all polar atoms in a molecule.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
      units: 'Å²',
    },
    xLogP3: {
      value: 3.4,
      label: 'XLogP3',
      description: 'Computed Octanol/Water Partition Coefficient',
      reference: {
        description: 'Computed by XLogP3 3.0 (PubChem release 2019.06.18)',
      },
    },
    hydrogenBondDonorCount: {
      value: 0,
      label: 'Hydrogen Bond Donor Count',
      description: 'The number of hydrogen bond donors in the structure.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    hydrogenBondAcceptorCount: {
      value: 0,
      label: 'Hydrogen Bond Acceptor Count',
      description: 'The number of hydrogen bond acceptors in the structure.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    rotableBondCount: {
      value: 3,
      label: 'Rotatable Bond Count',
      description:
        'A rotatable bond is defined as any single-order non-ring bond, where atoms on either side of the bond are in turn bound to nonterminal heavy (i.e., non-hydrogen) atoms. That is, where rotation around the bond axis changes the overall shape of the molecule, and generates conformers which can be distinguished by standard fast spectroscopic methods.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    heavyAtomCount: {
      value: 6,
      label: 'Heavy Atom Count',
      description:
        'A heavy atom is defined as any atom except hydrogen in a chemical structure.',
      reference: { description: 'Computed by PubChem' },
    },
    formalCharge: {
      value: 0,
      label: 'Formal Charge',
      description:
        'Formal charge is the difference between the number of valence electrons of each atom and the number of electrons the atom is associated with. Formal charge assumes any shared electrons are equally shared between the two bonded atoms.',
      reference: { description: 'Computed by PubChem' },
    },
  });
});
