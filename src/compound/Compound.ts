import { compoundDataFromCID } from '../compoundData/from/compoundDataFromCID.js';

import { compoundFromInchiKey } from './from/compoundFromInchiKey.js';
import { compoundFromSmiles } from './from/compoundFromSmiles.js';

export interface CompoundOptions {
  cache?: (query: string, value?: string) => any;
}
export class Compound {
  data: any;
  cache?: (query: string, value?: string) => any;
  static fromSmiles: (
    smiles: any,
    options?: CompoundOptions,
  ) => Promise<Compound>;
  static fromInchiKey: (
    inchiKey: any,
    options?: CompoundOptions,
  ) => Promise<Compound>;
  constructor(data: any, options: CompoundOptions = {}) {
    this.data = data;
    this.cache = options.cache;
  }

  getCID() {
    return this.data?.id?.id?.cid;
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
Compound.fromInchiKey = compoundFromInchiKey;
