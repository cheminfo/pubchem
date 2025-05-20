import { describe, expect, it } from 'vitest';

import benzene from '../../../data/benzene.json';
import { CompoundData } from '../CompoundData';

describe('CompoundData', () => {
  const compoundData = new CompoundData(benzene);
  it('getExperimentalData', () => {
    const result = compoundData.getExperimentalData({
      pressure: { targetUnits: 'torr' },
      temperature: { targetUnits: '°C' },
    });
    expect(Object.keys(result)).toStrictEqual([
      'boilingPoint',
      'density',
      'flashPoint',
      'meltingPoint',
      'solubility',
      'vaporPressure',
      'refractiveIndex',
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
        url: 'https://pubchem.ncbi.nlm.nih.gov/source/hsdb/35',
        sourceName: 'Hazardous Substances Data Bank (HSDB)',
        name: 'BENZENE',
        description:
          'The Hazardous Substances Data Bank (HSDB) is a toxicology database that focuses on the toxicology of potentially hazardous chemicals. It provides information on human exposure, industrial hygiene, emergency handling procedures, environmental fate, regulatory requirements, nanomaterials, and related areas. The information in HSDB has been assessed by a Scientific Review Panel.',
      },
      data: {
        original: '80.08 °C',
        parsed: {
          temperature: { low: 80.08, high: undefined, units: '°C' },
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
