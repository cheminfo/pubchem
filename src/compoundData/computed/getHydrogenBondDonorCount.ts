import { ComputedData, DataType } from '../CompoundData';

import { getNumberProperties } from './getNumberProperties';

/**
 * Returns the hydrogen bond donor count of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns ComputedData
 */
export function getHydrogenBondDonorCount(data: DataType): ComputedData {
  const hydrogenBondDonorCount = getNumberProperties(
    data,
    'Hydrogen Bond Donor Count',
  );
  return hydrogenBondDonorCount;
}
