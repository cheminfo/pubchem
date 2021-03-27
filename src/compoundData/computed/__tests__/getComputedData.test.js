import data from '../../../../data/bromopentane.json';
import { getComputedData } from '../getComputedData.js';

test('getComputedData', () => {
  let result = getComputedData(data);
  expect(result).toStrictEqual({
    complexity: {
      value: 19.9,
      label: 'Complexity',
      description:
        'The complexity rating is computed using the <a href="https://pubs.acs.org/doi/abs/10.1021/ci00054a004">Bertz/Hendrickson/Ihlenfeldt formula</a> and gives a numerical estimate of how complex a molecule is.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    tpsa: {
      value: 0,
      label: 'Topological Polar Surface Area',
      description:
        'The topological polar surface area is the surface sum over all polar atoms in a molecule. It is an important estimator of transport properties of drugs.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
      units: 'Å²',
    },
    xLogP3: {
      value: 3.4,
      label: 'XLogP3',
      description:
        'The octanol water partiion coefficient can be used as estimate of  molecular hydrophobicity.',
      reference: {
        description: 'Computed by XLogP3 3.0 (PubChem release 2019.06.18)',
      },
    },
    hydrogenBondDonorCount: {
      value: 0,
      label: 'Hydrogen Bond Donor Count',
      description:
        'The number of hydrogen bond donor atoms in the structure. A hydrogen bond donor site can contribute a H to hydrogen bond formation.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    hydrogenBondAcceptorCount: {
      value: 0,
      label: 'Hydrogen Bond Acceptor Count',
      description:
        'The number of hydrogen bond acceptor atoms in the structure. A hydrogen bond acceptor has a lone pair that can form hydrogen bonds.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    rotableBondCount: {
      value: 3,
      label: 'Rotatable Bond Count',
      description:
        'Rotable bonds are single bonds that are not part of a ring and for which, rotation around the bond changes the overall shape of the molecule.',
      reference: {
        description: 'Computed by Cactvs 3.4.6.11 (PubChem release 2019.06.18)',
      },
    },
    heavyAtomCount: {
      value: 6,
      label: 'Heavy Atom Count',
      description: 'The number of atoms except hydrogen in the molecule.',
      reference: { description: 'Computed by PubChem' },
    },
    formalCharge: {
      value: 0,
      label: 'Formal Charge',
      description:
        'The formal charge is the difference between the number of valence electrons of each atom and the number of electrons the atom is associated with (assuming that the electrons in each bond are split equally between the bonded atoms).',
      reference: { description: 'Computed by PubChem' },
    },
  });
});
