import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getHydrogenBondAcceptorCount(data) {
  const description =
    'The number of hydrogen bond acceptor atoms in the structure. A hydrogen bond acceptor has a lone pair that can form hydrogen bonds.';
  const hydrogenBondAcceptorCount = getNumberProperties(
    data,
    'Hydrogen Bond Acceptor Count',
    description,
  );
  return hydrogenBondAcceptorCount;
}
