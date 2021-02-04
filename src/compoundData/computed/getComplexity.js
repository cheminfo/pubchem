import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @param {Boolean} options.returnReferences If true it also returns info about references, defaults to false.
 * @returns {ComputedData}
 */

export function getComplexity(data, options = {}) {
  const { returnReferences = false } = options;
  const complexity = getNumberProperties(data, 'Complexity', returnReferences);
  return complexity;
}
