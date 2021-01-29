import jp from 'jsonpath';

/**
 * Returns all references cited in the PubChem entry
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @returns {Array<Object>.<String,String>} References
 */
export function getReferences(data) {
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
