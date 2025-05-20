import type { ComputedData, DataType } from '../CompoundData';

import { getNumberProperties } from './getNumberProperties';

/**
 * Returns the hydrogen bond acceptor count of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns Computed Data
 */

export function getHydrogenBondAcceptorCount(data: DataType): ComputedData {
  const hydrogenBondAcceptorCount = getNumberProperties(
    data,
    'Hydrogen Bond Acceptor Count',
  );
  return hydrogenBondAcceptorCount;
}
