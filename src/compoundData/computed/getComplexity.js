import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @returns {ComputedData}
 */

export function getComplexity(data) {
  const complexity = getNumberProperties(data, 'Complexity');
  return complexity;
}
