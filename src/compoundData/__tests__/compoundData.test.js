import { it, expect, describe } from 'vitest';

import benzene from '../../../data/benzene.json';
import { CompoundData } from '../CompoundData.js';

describe('CompoundData', () => {
  let compoundData = new CompoundData(benzene);
  it('getExperimentalData', () => {
    const result = compoundData.getExperimentalData({
      pressure: { targetUnits: 'torr' },
      temperature: { targetUnits: '°C' },
    });
    expect(Object.keys(result)).toStrictEqual([
      'boilingPoint',
      'flashPoint',
      'meltingPoint',
      'solubility',
      'vaporPressure',
    ]);

    const identifiers = compoundData.getIdentifiers();
    expect(Object.keys(identifiers)).toStrictEqual([
      'formula',
      'inchi',
      'inchiKey',
      'smiles',
    ]);

    expect(compoundData.getSMILES().value).toBe('C1=CC=CC=C1');
    expect(compoundData.getInChI().value).toBe(
      'InChI=1S/C6H6/c1-2-4-6-5-3-1/h1-6H',
    );
    expect(compoundData.getInChIKey().value).toBe(
      'UHOVQNZJYSORNB-UHFFFAOYSA-N',
    );
    expect(compoundData.getFormula().value).toBe('C6H6');

    expect(result.boilingPoint[1]).toStrictEqual({
      reference: {
        url: 'https://comptox.epa.gov/dashboard/DTXSID3039242',
        sourceName: 'EPA DSSTox',
        name: 'Benzene',
        description:
          'DSSTox provides a high quality public chemistry resource for supporting improved predictive toxicology.',
      },
      data: {
        original: '80.0 °C',
        parsed: {
          temperature: { low: 80, high: undefined, units: '°C' },
          pressure: { low: 760, high: undefined, units: 'torr' },
        },
      },
    });
  });

  it('toJSON', () => {
    const result = compoundData.toJSON();
    expect(Object.keys(result)).toStrictEqual(['computed', 'ghs']);
  });
});
