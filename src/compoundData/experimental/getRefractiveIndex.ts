import { parseRefractiveIndex } from 'physical-parser';

import type { DataType } from '../CompoundData';

import { extractExperimentalData } from './extractExperimentalData';
/**
 * Returns the refractive index of a compound
 * @param data Data of a compound data request to the PubChem API
 * @returns ExperimentalData
 */

export function getRefractiveIndex(data: DataType = {}) {
  const refractiveIndex = extractExperimentalData(data, 'Refractive Index', {
    parser: (value) => parseRefractiveIndex(value),
  });
  return refractiveIndex;
}
