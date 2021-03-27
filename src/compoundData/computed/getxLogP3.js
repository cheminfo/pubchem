import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getxLogP3(data) {
  const description =
    'The octanol water partiion coefficient can be used as estimate of  molecular hydrophobicity.';
  const xLogP3 = getNumberProperties(data, 'XLogP3', description);
  return xLogP3;
}
