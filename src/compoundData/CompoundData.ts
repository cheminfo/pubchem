import { getComputedData } from './computed/getComputedData';
import { getBoilingPoint } from './experimental/getBoilingPoint';
import { getDensity } from './experimental/getDensity';
import { getExperimentalData } from './experimental/getExperimentalData';
import { getFlashPoint } from './experimental/getFlashPoint';
import { getMeltingPoint } from './experimental/getMeltingPoint';
import { getSolubility } from './experimental/getSolubility';
import { getVaporPressure } from './experimental/getVaporPressure';
import { getReferences } from './getReferences';
import { getFormula } from './identifiers/getFormula';
import { getIdentifiers } from './identifiers/getIdentifiers';
import { getInChI } from './identifiers/getInChI';
import { getInChIKey } from './identifiers/getInChIKey';
import { getSMILES } from './identifiers/getSMILES';
import { getGHS, getGHSSummary } from './safety/getGHS';

export type DataType = any;

export interface ComputedData {
  /**
   * Value of the property
   * @type {Number}
   * @default null
   */
  value: number | null;
  /**
   * Human readable name of the property
   * @type {String}
   * @default null
   */
  label: string | null;
  /**
   * Description of the property
   * @type {String}
   * @default null
   */
  description: string | null;
  /**
   * Units of the property
   * @type {String}
   */
  units?: string;
  reference: {
    /**
     * URL of the reference
     * @type {String}
     */
    url?: string;
    /**
     * Name of the source
     * @type {String}
     */
    sourceName?: string;
    /**
     * Name of the reference
     * @type {String}
     */
    name?: string;
    /**
     * Description of the reference
     * @type {String}
     * @default null
     */
    description: string | null;
  };
}
export class CompoundData {
  data: DataType;
  constructor(data: DataType) {
    this.data = data;
  }
  getReferences() {
    return getReferences(this.data);
  }

  getExperimentalData(options) {
    return getExperimentalData(this.data, options);
  }

  getIdentifiers() {
    return getIdentifiers(this.data);
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
   * Canonical SMILES
   */
  getSMILES() {
    return getSMILES(this.data);
  }

  /**
   * Return molecular formula in Hill notation
   */
  getFormula() {
    return getFormula(this.data);
  }

  /**
   * Return the International Chemical Identifier (InChI) computed from chemical structure using the International Union of Pure and Applied Chemistry (IUPAC) standard
   */
  getInChI() {
    return getInChI(this.data);
  }

  /**
   * International Chemical Identifier hash (InChIKey) computed from chemical structure using the International Union of Pure and Applied Chemistry (IUPAC) standard.
   */
  getInChIKey() {
    return getInChIKey(this.data);
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

  getDensity(options) {
    return getDensity(this.data, options);
  }

  getVaporPressure(options) {
    return getVaporPressure(this.data, options);
  }

  getSolubility() {
    return getSolubility(this.data);
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
    const result = {};
    for (const method of methods) {
      result[method] = this[method];
    }

    return result;
  }
}
