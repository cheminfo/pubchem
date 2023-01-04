import { ComputedData, DataType } from '../CompoundData.js';

import { getNumberProperties } from './getNumberProperties.js';

/**
 * Returns the rotable bond count of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns ComputedData
 */

export function getRotableBondCount(data: DataType): ComputedData {
  const rotableBondCount = getNumberProperties(data, 'Rotatable Bond Count');
  return rotableBondCount;
}
