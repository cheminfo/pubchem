import { expect, test } from 'vitest';

import data from '../../../../data/bromopentane.json';
import { getComputedData } from '../getComputedData';

test('getComputedData', () => {
  const result = getComputedData(data);
  expect(result).toStrictEqual({
    complexity: {
      value: 19.9,
      label: 'Complexity',
      description:
        'The complexity rating of a compound is a rough estimate of how complicated a structure is, seen from both the point of view of the elements contained and the displayed structural features including symmetry. This complexity rating is computed using the Bertz/Hendrickson/Ihlenfeldt formula.',
      reference: {
        description: 'Computed by Cactvs 3.4.8.18 (PubChem release 2025.04.14)',
      },
    },
    tpsa: {
      value: 0,
      label: 'Topological Polar Surface Area',
      description:
        'The topological polar surface area (TPSA) is an estimate of the polar surface area (in Angstroms^2) of a molecule, computed as the surface sum over polar atoms in the molecule.  The implementation follows the paper by Ertl et al. [J. Med. Chem. 2000, 43, 3714-3717]: only N and O are considered, 3D coordinates are not used, and there are various precomputed factors for different hybridizations, charges and participation in aromatic systems.',
      reference: {
        description: 'Computed by Cactvs 3.4.8.18 (PubChem release 2025.04.14)',
      },
      units: 'Å²',
    },
    xLogP3: {
      value: 3.4,
      label: 'XLogP3',
      description:
        'XLogP3 is a predicted octanol-water partition coefficient, computed using the algorithm described in J. Chem. Inf. Model. 2007, 47, 6, 2140-2148. It is used as a measure of hydrophilicity or hydrophobicity of a molecule.',
      reference: {
        description: 'Computed by XLogP3 3.0 (PubChem release 2025.04.14)',
      },
    },
    hydrogenBondDonorCount: {
      value: 0,
      label: 'Hydrogen Bond Donor Count',
      description: 'The number of hydrogen bond donors in this compound.',
      reference: {
        description: 'Computed by Cactvs 3.4.8.18 (PubChem release 2025.04.14)',
      },
    },
    hydrogenBondAcceptorCount: {
      value: 0,
      label: 'Hydrogen Bond Acceptor Count',
      description: 'The number of hydrogen bond acceptors in this compound.',
      reference: {
        description: 'Computed by Cactvs 3.4.8.18 (PubChem release 2025.04.14)',
      },
    },
    rotableBondCount: {
      value: 3,
      label: 'Rotatable Bond Count',
      description:
        'A rotatable bond is defined as any single-order non-ring bond, where atoms on either side of the bond are in turn bound to nonterminal heavy (i.e., non-hydrogen) atoms. That is, where rotation around the bond axis changes the overall shape of the molecule, and generates conformers which can be distinguished by standard fast spectroscopic methods.',
      reference: {
        description: 'Computed by Cactvs 3.4.8.18 (PubChem release 2025.04.14)',
      },
    },
    heavyAtomCount: {
      value: 6,
      label: 'Heavy Atom Count',
      description:
        'The number of heavy atoms (i.e., non-hydrogen atoms) in this compound.',
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
