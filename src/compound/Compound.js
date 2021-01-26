import { compoundDataFromCID } from '../compoundData/from/compoundDataFromCID.js';

import { compoundFromSmiles } from './from/compoundFromSmiles.js';

export class Compound {
  constructor(data, options = {}) {
    this.data = data;
    this.cache = options.cache;
  }

  getCID() {
    return this.data && this.data.id && this.data.id.id && this.data.id.id.cid;
  }

  getData() {
    const cid = this.getCID();
    let cd = compoundDataFromCID(cid, { cache: this.cache });
    return cd;
  }

  toJSON() {
    const methods = Object.entries(
      Object.getOwnPropertyDescriptors(Compound.prototype),
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

Compound.fromSmiles = compoundFromSmiles;
