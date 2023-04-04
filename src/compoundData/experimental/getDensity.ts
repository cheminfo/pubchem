import { parseDensity } from 'physical-parser';

import { Options } from '../../compound/Compound';
import { DataType } from '../CompoundData';

import { extractExperimentalData } from './extractExperimentalData';
/**
 * Returns the refractive index of a compound
 * @param data Data of a compound data request to the PubChem API
 * @returns ExperimentalData
 */

export function getDensity(data: DataType = {}, options: Options = {}) {
  const density = extractExperimentalData(data, 'Density', {
    parser: (value) => {
      return parseDensity(value, options);
    },
  });
  return density;
}
