import merge from 'deepmerge';
import { parseVaporPressure } from 'physical-parser';

import type { Options } from '../../compound/Compound';
import type { DataType } from '../CompoundData';

import { extractExperimentalData } from './extractExperimentalData';
/**
 * Returns the vapor pressure of a compound
 * @param data Data of a compound data request to the PubChem API
 * @param options Options for the compound
 */

export function getVaporPressure(data: DataType, options: Options = {}) {
  const vaporPressure = extractExperimentalData(data, 'Vapor Pressure', {
    parser: (value) =>
      parseVaporPressure(
        value,
        merge(
          {
            temperature: { optional: true },
          },
          options,
        ),
      ),
  });
  return vaporPressure;
}
