import type { DataType } from '../CompoundData.js';

import { getFormula } from './getFormula.js';
import { getInChI } from './getInChI.js';
import { getInChIKey } from './getInChIKey.js';
import { getSMILES } from './getSMILES.js';

export function getIdentifiers(data: DataType) {
  return {
    formula: getFormula(data),
    inchi: getInChI(data),
    inchiKey: getInChIKey(data),
    smiles: getSMILES(data),
  };
}
