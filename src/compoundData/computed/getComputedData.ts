import type { DataType } from '../CompoundData';

import { getComplexity } from './getComplexity';
import { getFormalCharge } from './getFormalCharge';
import { getHeavyAtomCount } from './getHeavyAtomCount';
import { getHydrogenBondAcceptorCount } from './getHydrogenBondAcceptorCount';
import { getHydrogenBondDonorCount } from './getHydrogenBondDonorCount';
import { getRotableBondCount } from './getRotableBondCount';
import { getTPSA } from './getTPSA';
import { getxLogP3 } from './getxLogP3';

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
