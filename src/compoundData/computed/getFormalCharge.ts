import { ComputedData, DataType } from '../CompoundData';

import { getNumberProperties } from './getNumberProperties';

/**
 * Returns the formal charge of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns Computed Data
 */
export function getFormalCharge(data: DataType): ComputedData {
  const formalCharge = getNumberProperties(data, 'Formal Charge');
  return formalCharge;
}
