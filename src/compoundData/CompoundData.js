import {
  getBoilingPoint,
  getMeltingPoint,
  getVaporPressure,
  getSolubility,
  getFlashPoint,
} from './getExperimentalData.js';
import { getReferences } from './getReferences.js';
import { getGHS, getGHSSummary } from './safety/getGHS.js';

export class CompoundData {
  constructor(data) {
    this.data = data;
  }
  getReferences() {
    return getReferences(this.data);
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

  get boilingPoint() {
    return getBoilingPoint(this.data).summary;
  }

  getBoilingPoint(options) {
    return getBoilingPoint(this.data, options);
  }

  get meltingPoint() {
    return getMeltingPoint(this.data).summary;
  }

  getMeltingPoint() {
    return getMeltingPoint(this.data);
  }

  get vaporPressure() {
    return getVaporPressure(this.data).summary;
  }

  getVaporPressure(options) {
    return getVaporPressure(this.data, options);
  }

  get solubility() {
    return getSolubility(this.data).summary;
  }

  getSolubility(options) {
    return getSolubility(this.data, options);
  }

  get flashPoint() {
    return getFlashPoint(this.data).summary;
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
