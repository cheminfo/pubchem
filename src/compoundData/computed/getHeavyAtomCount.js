import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getHeavyAtomCount(data) {
  const description = 'The number of atoms except hydrogen in the molecule.';
  const heavyAtomCount = getNumberProperties(
    data,
    'Heavy Atom Count',
    description,
  );
  return heavyAtomCount;
}
