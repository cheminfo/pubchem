import { DataType } from '../CompoundData';

import { extractExperimentalData } from './extractExperimentalData';
/**
 * Returns the solubility of a compound
 * @param data Data of a compound data request to the PubChem API
 * @returns ExperimentalData
 */

export function getSolubility(data: DataType) {
  const solubility = extractExperimentalData(data, 'Solubility');
  return solubility;
}
