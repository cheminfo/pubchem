import { extractExperimentalData } from './extractExperimentalData.js';
/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @returns {ExperimentalData}
 */

export function getSolubility(data) {
  const solubility = extractExperimentalData(data, 'Solubility');
  return solubility;
}
