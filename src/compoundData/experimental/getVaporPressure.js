import merge from 'deepmerge';
import { parseVaporPressure } from 'physical-parser';

import { extractExperimentalData } from './extractExperimentalData.js';
/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {object} [options={}]
 * @param {object} [options.targetUnits]
 * @returns {ExperimentalData}
 */

export function getVaporPressure(data, options = {}) {
  const vaporPressure = extractExperimentalData(data, 'Vapor Pressure', {
    parser: (value) =>
      parseVaporPressure(
        value,
        merge(
          {
            temperature: { optional: true },
          },
          options,
        ),
      ),
  });
  return vaporPressure;
}
