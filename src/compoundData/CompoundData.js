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

  getGHS() {
    return getGHS(this.data);
  }

  getComplexity() {
    return getComplexity(this.data);
  }

  getFormalCharge() {
    return getFormalCharge(this.data);
  }

  getTPSA() {
    return getTPSA(this.data);
  }

  getHydrogenBondAcceptorCount() {
    return getHydrogenBondAcceptorCount(this.data);
  }

  getHydrogenBondDonorCount() {
    return getHydrogenBondDonorCount(this.data);
  }

  getxLogP3() {
    return getxLogP3(this.data);
  }

  getBoilingPoint() {
    return getBoilingPoint(this.data);
  }

  getMeltingPoint() {
    return getMeltingPoint(this.data);
  }

  getVaporPressure() {
    return getVaporPressure(this.data);
  }

  getSolubility() {
    return getSolubility(this.data);
  }

  getFlashPoint() {
    return getFlashPoint(this.data);
  }
}
