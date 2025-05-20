import type { ComputedData, DataType } from '../CompoundData';

import { getNumberProperties } from './getNumberProperties';

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
