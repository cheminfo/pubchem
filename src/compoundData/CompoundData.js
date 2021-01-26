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
  get references() {
    return getReferences(this.data);
  }

  get ghs() {
    return getGHS(this.data);
  }

  get complexity() {
    return getComplexity(this.data);
  }

  get formalCharge() {
    return getFormalCharge(this.data);
  }

  get tpsa() {
    return getTPSA(this.data);
  }

  get hydrogenBondAcceptorCount() {
    return getHydrogenBondAcceptorCount(this.data);
  }

  get hydrogenBondDonorCount() {
    return getHydrogenBondDonorCount(this.data);
  }

  get xLogP3() {
    return getxLogP3(this.data);
  }

  get boilingPoint() {
    return getBoilingPoint(this.data);
  }

  get meltingPoint() {
    return getMeltingPoint(this.data);
  }

  get vaporPressure() {
    return getVaporPressure(this.data);
  }

  get solubility() {
    return getSolubility(this.data);
  }

  get flashPoint() {
    return getFlashPoint(this.data);
  }

  toJSON() {
    const getters = Object.entries(Object.getOwnPropertyDescriptors(CompoundData.prototype))
      .filter(([key, descriptor]) => typeof descriptor.get === 'function')
      .map(([key]) => key)
    let result = {};
    for (let getter of getters) {
      result[getter] = this[getter];
    }
    console.log(result);
    return result;
  }
}
