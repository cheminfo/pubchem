import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getFormalCharge(data) {
  const description =
    'The formal charge is the difference between the number of valence electrons of each atom and the number of electrons the atom is associated with (assuming that the electrons in each bond are split equally between the bonded atoms).';
  const formalCharge = getNumberProperties(data, 'Formal Charge', description);
  return formalCharge;
}
