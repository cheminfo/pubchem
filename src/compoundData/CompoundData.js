import { getComputedData } from './computed/getComputedData.js';
import { getBoilingPoint } from './experimental/getBoilingPoint.js';
import { getExperimentalData } from './experimental/getExperimentalData.js';
import { getFlashPoint } from './experimental/getFlashPoint.js';
import { getMeltingPoint } from './experimental/getMeltingPoint.js';
import { getSolubility } from './experimental/getSolubility.js';
import { getVaporPressure } from './experimental/getVaporPressure.js';
import { getReferences } from './getReferences.js';
import { getGHS, getGHSSummary } from './safety/getGHS.js';

export class CompoundData {
  constructor(data) {
    this.data = data;
  }
  getReferences() {
    return getReferences(this.data);
  }

  getExperimentalData(options) {
    return getExperimentalData(this.data, options);
  }

  get computed() {
    return getComputedData(this.data);
  }

  /**
   * Property containing a summary of GHS information
   */
  get ghs() {
    return getGHSSummary(this.data);
  }

  /**
   * Detailed information about GHS information
   */
  getGHS() {
    return getGHS(this.data);
  }

  getMeltingPoint(options) {
    return getMeltingPoint(this.data, options);
  }

  getBoilingPoint(options) {
    return getBoilingPoint(this.data, options);
  }

  getVaporPressure(options) {
    return getVaporPressure(this.data, options);
  }

  getSolubility(options) {
    return getSolubility(this.data, options);
  }

  getFlashPoint(options) {
    return getFlashPoint(this.data, options);
  }

  toJSON() {
    const methods = Object.entries(
      Object.getOwnPropertyDescriptors(CompoundData.prototype),
    )
      .filter(([, descriptor]) => typeof descriptor.get === 'function')
      .map(([key]) => key);
    let result = {};
    for (let method of methods) {
      result[method] = this[method];
    }

    return result;
  }
}
