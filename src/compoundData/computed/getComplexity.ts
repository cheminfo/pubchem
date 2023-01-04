import { ComputedData, DataType } from '../CompoundData';

import { getNumberProperties } from './getNumberProperties';

/**
 * Returns the complexity of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns ComputedData
 */
export function getComplexity(data: DataType): ComputedData {
  const complexity = getNumberProperties(data, 'Complexity');
  return complexity;
}
