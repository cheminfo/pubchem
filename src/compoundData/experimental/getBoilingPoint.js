import merge from 'deepmerge';
import { parseBoilingPoint } from 'physical-parser';

import { extractExperimentalData } from './extractExperimentalData.js';
/**
 *
 *
 * @export
 * @param {object} data response of a compound data request to the PubChem API
 * @param {object} [options={}]
 * @param {object} [options.targetUnits]
 * @returns {ExperimentalData}
 */

export function getBoilingPoint(data, options = {}) {
  const boilingPoint = extractExperimentalData(data, 'Boiling Point', {
    parser: (value) =>
      parseBoilingPoint(
        value,
        merge(
          {
            pressure: { defaultValue: 760, defaultUnits: 'torr' },
          },
          options,
        ),
      ),
  });
  return boilingPoint;
}
