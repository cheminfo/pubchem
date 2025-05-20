import jp from 'jsonpath';

import type { DataType } from '../CompoundData';

/**
 * Returns the computed data section of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns Computed Data section
 */
export function getComputedDataSection(data: DataType) {
  const computedData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Computed Properties")]',
  );
  return computedData;
}
