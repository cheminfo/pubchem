import { getGHS } from '../getGHS.js';

import data from './test.json';

test('getGHS default request', () => {
  let result = getGHS(data);
  expect(result).toHaveProperty('summary.hCodes');
  expect(result.summary.hCodes).toStrictEqual([
    'H226',
    'H315',
    'H319',
    'H335',
    'H411',
  ]);
  expect(result).toHaveProperty('summary.pCodes');
  expect(result.summary.pCodes).toStrictEqual([
    'P210',
    'P233',
    'P240',
    'P241',
    'P242',
    'P243',
    'P261',
    'P264',
    'P271',
    'P273',
    'P280',
    'P302+P352',
    'P303+P361+P353',
    'P304+P340',
    'P305+P351+P338',
    'P312',
    'P321',
    'P332+P313',
    'P337+P313',
    'P362',
    'P370+P378',
    'P391',
    'P403+P233',
    'P403+P235',
    'P405',
    'P501',
  ]);
  expect(result).toHaveProperty('summary.pictograms');
  expect(result.summary.pictograms).toStrictEqual(['GHS02', 'GHS07', 'GHS09']);
  expect(result).toHaveProperty('summary.hStatements');
  expect(result).toHaveProperty('summary.pStatements');
});

test('getGHS detail request', () => {
  let result = getGHS(data, { returnDetails: true, returnReferences: true });
  expect(result).toHaveProperty('summary.hCodes');
  expect(result.summary.hCodes).toStrictEqual([
    'H226',
    'H315',
    'H319',
    'H335',
    'H411',
  ]);
  expect(result).toHaveProperty('summary.pCodes');
  expect(result.summary.pCodes).toStrictEqual([
    'P210',
    'P233',
    'P240',
    'P241',
    'P242',
    'P243',
    'P261',
    'P264',
    'P271',
    'P273',
    'P280',
    'P302+P352',
    'P303+P361+P353',
    'P304+P340',
    'P305+P351+P338',
    'P312',
    'P321',
    'P332+P313',
    'P337+P313',
    'P362',
    'P370+P378',
    'P391',
    'P403+P233',
    'P403+P235',
    'P405',
    'P501',
  ]);
  expect(result).toHaveProperty('summary.pictograms');
  expect(result.summary.pictograms).toStrictEqual(['GHS02', 'GHS07', 'GHS09']);
  expect(result).toHaveProperty('summary.hStatements');
  expect(result).toHaveProperty('summary.pStatements');
  expect(result).toHaveProperty('details');
  expect(result).toHaveProperty('references');
  expect(result.details).toHaveProperty('hCodes');
  expect(result.details).toHaveProperty('pCodes');
  expect(result.details.pictograms).toStrictEqual({
    6: ['GHS02', 'GHS07', 'GHS09'],
  });
  expect(Object.keys(result.references)).toStrictEqual(['6']);
});
