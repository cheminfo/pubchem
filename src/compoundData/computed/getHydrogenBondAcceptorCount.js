import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getHydrogenBondAcceptorCount(data) {
  const hydrogenBondAcceptorCount = getNumberProperties(
    data,
    'Hydrogen Bond Acceptor Count',
  );
  return hydrogenBondAcceptorCount;
}
