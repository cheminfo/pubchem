import { ComputedData, DataType } from '../CompoundData';

import { getNumberProperties } from './getNumberProperties';

/**
 * Returns the topological polar surface area in angstrom^2
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns Computed Data
 */

export function getTPSA(data: DataType): ComputedData {
  const tpsa = getNumberProperties(data, 'Topological Polar Surface Area');
  return tpsa;
}
