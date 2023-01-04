import { DataType } from '../compoundData/CompoundData';
import { compoundDataFromCID } from '../compoundData/from/compoundDataFromCID';

import { compoundFromInchiKey } from './from/compoundFromInchiKey';
import { compoundFromSmiles } from './from/compoundFromSmiles';

export interface Options {
  cache?: (query: string, value?: string) => DataType;
  parser?: (value: string, options?: Options) => any;
  targetUnits?: string;
  pressure?: {
    defaultValue?: number;
    defaultUnits?: string;
    targetUnits?: string;
    optional?: boolean;
  };
  temperature?: {
    defaultValue?: number;
    defaultUnits?: string;
    targetUnits?: string;
    optional?: boolean;
  };
}
export class Compound {
  data: DataType;
  cache?: (query: string, value?: string) => DataType;
  static fromSmiles: (
    smiles: string,
    options?: Pick<Options, 'cache'>,
  ) => Promise<Compound>;
  static fromInchiKey: (
    inchiKey: string,
    options?: Pick<Options, 'cache'>,
  ) => Promise<Compound>;
  constructor(data: DataType, options: Pick<Options, 'cache'> = {}) {
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
