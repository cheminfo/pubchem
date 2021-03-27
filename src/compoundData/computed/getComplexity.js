import { getNumberProperties } from './getNumberProperties.js';

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @returns {ComputedData}
 */

export function getComplexity(data) {
  const description =
    'The complexity rating is computed using the <a href="https://pubs.acs.org/doi/abs/10.1021/ci00054a004">Bertz/Hendrickson/Ihlenfeldt formula</a> and gives a numerical estimate of how complex a molecule is.';
  const complexity = getNumberProperties(data, 'Complexity', description);
  return complexity;
}
