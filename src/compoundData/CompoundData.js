import {
  getComplexity,
  getFormalCharge,
  getHydrogenBondAcceptorCount,
  getHydrogenBondDonorCount,
  getTPSA,
  getxLogP3,
} from './getComputedData.js';
import {
  getBoilingPoint,
  getMeltingPoint,
  getVaporPressure,
  getSolubility,
  getFlashPoint,
} from './getExperimentalData.js';
import { getGHS } from './getGHS.js';
import { getReferences } from './getReferences.js';

export class CompoundData {
  constructor(data) {
    this.data = data;
  }
  getReferences() {
    return getReferences(this.data);
  }

  /**
   *
   */
  get ghs() {
    return getGHS(this.data).summary;
  }

  /**
   *
   * @param {*} options
   */
  getGHS(options) {
    return getGHS(this.data, options);
  }

  get complexity() {
    return getComplexity(this.data);
  }

  getComplexity(options) {
    return getComplexity(this.data, options);
  }

  getFormalCharge(options) {
    return getFormalCharge(this.data, options);
  }

  getTPSA(options) {
    return getTPSA(this.data, options);
  }

  getHydrogenBondAcceptorCount(options) {
    return getHydrogenBondAcceptorCount(this.data, options);
  }

  getHydrogenBondDonorCount(options) {
    return getHydrogenBondDonorCount(this.data, options);
  }

  getxLogP3(options) {
    return getxLogP3(this.data, options);
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
      .filter(([key, descriptor]) => typeof descriptor.get === 'function')
      .map(([key]) => key);
    let result = {};
    for (let method of methods) {
      result[method] = this[method];
    }

    return result;
  }
}
