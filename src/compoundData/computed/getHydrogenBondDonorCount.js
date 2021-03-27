import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getHydrogenBondDonorCount(data) {
  const description =
    'The number of hydrogen bond donor atoms in the structure. A hydrogen bond donor site can contribute a H to hydrogen bond formation.';
  const hydrogenBondDonorCount = getNumberProperties(
    data,
    'Hydrogen Bond Donor Count',
    description,
  );
  return hydrogenBondDonorCount;
}
