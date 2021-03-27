import { getNumberProperties } from './getNumberProperties.js';

/**
 * Returns the topological polar surface area in angstrom^2
 *
 * @export
 * @param {Object} [data] of a compound data request to the PubChem API
 * @returns {ComputedData}
 */

export function getTPSA(data) {
  const description =
    'The topological polar surface area is the surface sum over all polar atoms in a molecule. It is an important estimator of transport properties of drugs.';
  const tpsa = getNumberProperties(
    data,
    'Topological Polar Surface Area',
    description,
  );
  return tpsa;
}
