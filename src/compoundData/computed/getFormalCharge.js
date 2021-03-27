import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getFormalCharge(data) {
  const formalCharge = getNumberProperties(data, 'Formal Charge');
  return formalCharge;
}
