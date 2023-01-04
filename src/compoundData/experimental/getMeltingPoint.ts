import { parseNumbersUnits } from 'physical-parser';

import { Options } from '../../compound/Compound';
import { DataType } from '../CompoundData';

import { extractExperimentalData } from './extractExperimentalData';

/**
 * Returns the melting point of a compound
 * @param data Data of a compound data request to the PubChem API
 * @param options Options for the compound
 * @returns ExperimentalData
 */

export function getMeltingPoint(
  data: DataType,
  options: Pick<Options, 'temperature'> = {},
) {
  const meltingPoint = extractExperimentalData(data, 'Melting Point', {
    parser: (value) => parseNumbersUnits(value, options.temperature),
  });
  return meltingPoint;
}
