import type { ComputedData, DataType } from '../CompoundData';

import { getNumberProperties } from './getNumberProperties';

/**
 * Returns the xLogP3 of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns Computed Data
 */
export function getxLogP3(data: DataType): ComputedData {
  const xLogP3 = getNumberProperties(data, 'XLogP3');
  return xLogP3;
}
