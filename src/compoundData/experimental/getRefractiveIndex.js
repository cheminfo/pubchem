import { parseRefractiveIndex } from 'physical-parser';

import { extractExperimentalData } from './extractExperimentalData.js';
/**
 *
 *
 * @export
 * @param {object} data response of a compound data request to the PubChem API
 * @param {object} [options={}]
 * @param {object} [options.targetUnits]
 * @returns {ExperimentalData}
 */

export function getRefractiveIndex(data = {}) {
  const refractiveIndex = extractExperimentalData(data, 'Refractive Index', {
    parser: (value) => parseRefractiveIndex(value),
  });
  return refractiveIndex;
}
