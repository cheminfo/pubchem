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
    return compoundDataFromCID(cid, { cache: this.cache });
  }
}

Compound.fromSmiles = compoundFromSmiles;
