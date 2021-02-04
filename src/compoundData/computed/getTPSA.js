import { getNumberProperties } from './getNumberProperties.js';

/**
 * Returns the topological polar surface area in angstrom^2
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getTPSA(data) {
  const tpsa = getNumberProperties(data, 'Topological Polar Surface Area');
  return tpsa;
}
