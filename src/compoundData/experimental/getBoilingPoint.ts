import merge from 'deepmerge';
import { parseBoilingPoint } from 'physical-parser';

import type { Options } from '../../compound/Compound';
import type { DataType } from '../CompoundData';

import type { ExperimentalData } from './extractExperimentalData';
import { extractExperimentalData } from './extractExperimentalData';

/**
 * Returns the boiling point of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @param options Options for the compound
 * @returns ExperimentalData
 */
export function getBoilingPoint(
  data: DataType,
  options: Options = {},
): ExperimentalData[] {
  const boilingPoint = extractExperimentalData(data, 'Boiling Point', {
    parser: (value) =>
      parseBoilingPoint(
        value,
        merge(
          {
            pressure: { defaultValue: 760, defaultUnits: 'torr' },
          },
          options,
        ),
      ),
  });
  return boilingPoint;
}
