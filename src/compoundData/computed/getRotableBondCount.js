import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getRotableBondCount(data) {
  const rotableBondCount = getNumberProperties(data, 'Rotatable Bond Count');
  return rotableBondCount;
}
