import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getRotableBondCount(data) {
  const description =
    'Rotable bonds are single bonds that are not part of a ring and for which, rotation around the bond changes the overall shape of the molecule.';
  const rotableBondCount = getNumberProperties(
    data,
    'Rotatable Bond Count',
    description,
  );
  return rotableBondCount;
}
