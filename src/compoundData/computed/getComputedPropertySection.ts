import jp from 'jsonpath';

import { DataType } from '../CompoundData';

/**
 * Returns a computed data section of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @param sectionName Name of the section to be returned
 * @returns Computed Data section
 */
export function getComputedPropertySection(
  data: DataType,
  sectionName: string,
) {
  let returnData = jp.query(
    data,
    `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
  )[0];
  returnData.Description = jp.query(
    data,
    `$.Section[?(@.TOCHeading==="${sectionName}")].Description`,
  )[0];

  return returnData;
}
