import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getxLogP3(data) {
  const xLogP3 = getNumberProperties(data, 'XLogP3');
  return xLogP3;
}
