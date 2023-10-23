import { ComputedData, DataType } from '../CompoundData';

import { getComputedDataSection } from './getComputedDataSection';
import { getComputedPropertySection } from './getComputedPropertySection';

/**
 * Returns the number properties of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @param sectionName Name of the section to get the data from
 * @returns Computed Data
 */
export function getNumberProperties(
  data: DataType,
  sectionName: string,
): ComputedData {
  const output: ComputedData = {
    value: null,
    label: null,
    reference: {
      description: null,
    },
    description: null,
  };

  try {
    const computationalData = getComputedDataSection(data);

    const section = getComputedPropertySection(
      computationalData[0],
      sectionName,
    );
    output.value = section.Value.Number[0];
    output.label = sectionName;
    output.description = section.Description;
    output.reference.description = section.Reference[0];
    if (section.Value.Unit) {
      output.units = section.Value.Unit;
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}

  return output;
}
