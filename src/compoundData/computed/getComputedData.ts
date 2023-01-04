import { DataType } from '../CompoundData.js';

import { getComplexity } from './getComplexity.js';
import { getFormalCharge } from './getFormalCharge.js';
import { getHeavyAtomCount } from './getHeavyAtomCount.js';
import { getHydrogenBondAcceptorCount } from './getHydrogenBondAcceptorCount.js';
import { getHydrogenBondDonorCount } from './getHydrogenBondDonorCount.js';
import { getRotableBondCount } from './getRotableBondCount.js';
import { getTPSA } from './getTPSA.js';
import { getxLogP3 } from './getxLogP3.js';

/**
 * Returns an object of computed data
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns Object of computed data
 */
export function getComputedData(data: DataType) {
  return {
    hydrogenBondDonorCount: getHydrogenBondDonorCount(data),
    hydrogenBondAcceptorCount: getHydrogenBondAcceptorCount(data),
    rotableBondCount: getRotableBondCount(data),
    heavyAtomCount: getHeavyAtomCount(data),
    formalCharge: getFormalCharge(data),
    complexity: getComplexity(data),
    tpsa: getTPSA(data),
    xLogP3: getxLogP3(data),
  };
}
