import { parseNumbersUnits } from 'physical-parser';

import type { Options } from '../../compound/Compound';
import type { DataType } from '../CompoundData';

import { extractExperimentalData } from './extractExperimentalData';
/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {object} [options={}]
 * @param {object} [options.targetUnits]
 * @returns {ExperimentalData}
 */

export function getFlashPoint(
  data: DataType,
  options: Pick<Options, 'temperature'> = {},
) {
  const flashPoint = extractExperimentalData(data, 'Flash Point', {
    parser: (value) => parseNumbersUnits(value, options.temperature),
  });
  return flashPoint;
}
