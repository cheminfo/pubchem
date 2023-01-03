import { getBoilingPoint } from './getBoilingPoint.js';
import { getFlashPoint } from './getFlashPoint.js';
import { getMeltingPoint } from './getMeltingPoint.js';
import { getRefractiveIndex } from './getRefractiveIndex.js';
import { getSolubility } from './getSolubility.js';
import { getVaporPressure } from './getVaporPressure.js';

/**
 *
 * @param {object} data
 * @param {object} [options={}]
 * @param {object} [options.pressure={}]
 * @param {object} [options.pressure.defaultValue]
 * @param {object} [options.pressure.defaultUnits]
 * @param {object} [options.pressure.targetUnits]
 * @param {object} [options.pressure.optional]
 * @param {object} [options.temperature={}]
 * @param {object} [options.temperature.defaultValue]
 * @param {object} [options.temperature.defaultUnits]
 * @param {object} [options.temperature.targetUnits]
 * @param {object} [options.temperature.optional]
 */
export function getExperimentalData(data, options) {
  return {
    boilingPoint: getBoilingPoint(data, options),
    flashPoint: getFlashPoint(data, options),
    meltingPoint: getMeltingPoint(data, options),
    solubility: getSolubility(data, options),
    vaporPressure: getVaporPressure(data, options),
    refractiveIndex: getRefractiveIndex(data, options),
  };
}
