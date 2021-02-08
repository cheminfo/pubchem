import { getComputedDataSection } from './getComputedDataSection.js';
import { getComputedPropertySection } from './getComputedPropertySection.js';

export function getNumberProperties(data, sectionName) {
  const computationalData = getComputedDataSection(data);
  let section = getComputedPropertySection(
    computationalData[0],
    sectionName,
  )[0];

  let output = {
    value: section.Value.Number[0],
    label: sectionName,
    reference: {
      description: section.Reference[0],
    },
  };

  if (section.Value.Unit) {
    output.units = section.Value.Unit;
  }

  return output;
}
