import jp from 'jsonpath';

import type { DataType } from './CompoundData';

/**
 * Returns all references cited in the PubChem entry
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns References
 */
export function getReferences(data: DataType) {
  const references = jp.query(data, '$.Reference[*]').reduce((ref, entry) => {
    ref[entry.ReferenceNumber] = {
      url: entry.URL,
      sourceName: entry.SourceName,
      name: entry.Name,
      description: entry.Description,
    };
    return ref;
  }, {});

  return references;
}
