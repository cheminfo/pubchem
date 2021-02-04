import jp from 'jsonpath';

/*In case of computed data there is no need detail as it seems to be always just one value */
/**
 * @typedef {Object} ComputedData
 * @property {Number} value
 * @property {Object} references
 * @property {String} references.url -
 * @property {String} references.sourceName -
 * @property {String} references.name -
 * @property {String} references.description -
 */

export function getComputedDataSection(data) {
  const computedData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Computed Properties")]',
  );
  return computedData;
}
