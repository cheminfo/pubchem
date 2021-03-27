import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getHydrogenBondDonorCount(data) {
  const hydrogenBondDonorCount = getNumberProperties(
    data,
    'Hydrogen Bond Donor Count',
  );
  return hydrogenBondDonorCount;
}
