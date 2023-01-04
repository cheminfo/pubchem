import { Options } from '../../compound/Compound';
import { DataType } from '../CompoundData';

import { getBoilingPoint } from './getBoilingPoint';
import { getFlashPoint } from './getFlashPoint';
import { getMeltingPoint } from './getMeltingPoint';
import { getRefractiveIndex } from './getRefractiveIndex';
import { getSolubility } from './getSolubility';
import { getVaporPressure } from './getVaporPressure';

/**
 * Returns the experimental data of a compound
 * @param data Data of a compound data request to the PubChem API
 * @param options Options for the compound
 * @returns ExperimentalData
 */
export function getExperimentalData(data: DataType, options: Options) {
  return {
    boilingPoint: getBoilingPoint(data, options),
    flashPoint: getFlashPoint(data, options),
    meltingPoint: getMeltingPoint(data, options),
    solubility: getSolubility(data),
    vaporPressure: getVaporPressure(data, options),
    refractiveIndex: getRefractiveIndex(data),
  };
}
