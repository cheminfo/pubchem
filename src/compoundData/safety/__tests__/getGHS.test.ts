import { describe, expect, it } from 'vitest';

import bromopentane from '../../../../data/bromopentane.json';
import ethyleneglycol from '../../../../data/ethyleneglycol.json';
import triethylamine from '../../../../data/triethylamine.json';
import { getGHS, getGHSSummary } from '../getGHS';

describe('getGHS', () => {
  it('triethylamine', () => {
    const result = getGHS(triethylamine);
    expect(result.pictograms).toHaveLength(6);
    expect(result.hStatements).toHaveLength(6);
    expect(result.pStatements).toHaveLength(6);

    expect(result.pictograms[0].data).toStrictEqual([
      { code: 'GHS02', description: 'Flammable' },
      { code: 'GHS05', description: 'Corrosive' },
      { code: 'GHS06', description: 'Toxic' },
      { code: 'GHS07', description: 'Harmful Irritant' },
    ]);

    expect(result).toMatchSnapshot();
  });
});

describe('getGHSSummry', () => {
  it('bromopentane', () => {
    const result = getGHSSummary(bromopentane);

    expect(result.pictograms.map((entry) => entry.code)).toStrictEqual([
      'GHS02',
      'GHS07',
      'GHS09',
    ]);

    expect(result.hStatements.map((entry) => entry.code)).toStrictEqual([
      'H226',
      'H315',
      'H319',
      'H335',
      'H411',
    ]);

    expect(result.pStatements.map((entry) => entry.code)).toStrictEqual([
      'P210',
      'P233',
      'P240',
      'P241',
      'P242',
      'P243',
      'P261',
      'P264',
      'P264+P265',
      'P271',
      'P273',
      'P280',
      'P302+P352',
      'P303+P361+P353',
      'P304+P340',
      'P305+P351+P338',
      'P319',
      'P321',
      'P332+P317',
      'P337+P317',
      'P362+P364',
      'P370+P378',
      'P391',
      'P403+P233',
      'P403+P235',
      'P405',
      'P501',
    ]);
  });

  it('triethylamine', () => {
    const result = getGHSSummary(triethylamine);
    expect(result.pictograms.map((entry) => entry.code)).toStrictEqual([
      'GHS02',
      'GHS05',
      'GHS06',
      'GHS07',
      'GHS08',
      'GHS09',
    ]);
  });

  it('triethylamine with only europe', () => {
    const result = getGHSSummary(triethylamine, {
      sourceName: /European Parliament/,
    });
    expect(result.pictograms.map((entry) => entry.code)).toStrictEqual([
      'GHS02',
      'GHS05',
      'GHS06',
    ]);
  });

  it('ethylene glycol', () => {
    const result = getGHSSummary(ethyleneglycol);
    expect(result.pictograms.map((entry) => entry.code)).toStrictEqual([
      'GHS07',
      'GHS08',
    ]);
  });
});
