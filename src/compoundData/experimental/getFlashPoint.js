import { parseNumbersUnits } from 'physical-parser';

import { extractExperimentalData } from './extractExperimentalData.js';
/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {object} [options={}]
 * @param {object} [options.targetUnits]
 * @returns {ExperimentalData}
 */

export function getFlashPoint(data, options = {}) {
  const flashPoint = extractExperimentalData(data, 'Flash Point', {
    parser: (value) => parseNumbersUnits(value, options.temperature),
  });
  return flashPoint;
}
