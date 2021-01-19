import jp from 'jsonpath';

import { getReferences } from './getReferences.js';
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

function getComputedDataSection(data) {
  const computedData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Computed Properties")]',
  );
  return computedData;
}

function getComputedPropertySection(data, sectionName) {
  return jp.query(
    data,
    `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
  );
}

function getNumberProperties(data, sectionName, returnReferences = false) {
  const computationalData = getComputedDataSection(data);
  const parsedData = getComputedPropertySection(
    computationalData[0],
    sectionName,
  ).reduce((floatDict, entry) => {
    floatDict[entry.ReferenceNumber] = entry.Value.Number[0];
    return floatDict;
  }, {});
  let output = {
    value: Object.values(parsedData)[0],
  };
  if (returnReferences) {
    const allReferences = getReferences(data);
    output.references = Object.keys(parsedData).reduce(
      (referenceDict, entry) => {
        referenceDict[entry] = allReferences[entry];
        return referenceDict;
      },
      {},
    );
  }
  return output;
}

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @param {Boolean} options.returnReferences If true it also returns info about references, defaults to false.
 * @returns {ComputedData}
 */
export function getComplexity(data, options = {}) {
  const { returnReferences = false } = options;
  const complexity = getNumberProperties(data, 'Complexity', returnReferences);
  return complexity;
}

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @param {Boolean} options.returnReferences If true it also returns info about references, defaults to false.
 * @returns {ComputedData}
 */
export function getFormalCharge(data, options = {}) {
  const { returnReferences = false } = options;
  const formalCharge = getNumberProperties(
    data,
    'Formal Charge',
    returnReferences,
  );
  return formalCharge;
}

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @param {Boolean} options.returnReferences If true it also returns info about references, defaults to false.
 * @returns {ComputedData}
 */
export function getHeavyAtomCount(data, options = {}) {
  const { returnReferences = false } = options;
  const heavyAtomCount = getNumberProperties(
    data,
    'Heavy Atom Count',
    returnReferences,
  );
  return heavyAtomCount;
}

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @param {Boolean} options.returnReferences If true it also returns info about references, defaults to false.
 * @returns {ComputedData}
 */
export function getRotableBondCount(data, options = {}) {
  const { returnReferences = false } = options;
  const rotableBondCount = getNumberProperties(
    data,
    'Rotatable Bond Count',
    returnReferences,
  );
  return rotableBondCount;
}

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @param {Boolean} options.returnReferences If true it also returns info about references, defaults to false.
 * @returns {ComputedData}
 */
export function getHydrogenBondAcceptorCount(data, options = {}) {
  const { returnReferences = false } = options;
  const hydrogenBondAcceptorCount = getNumberProperties(
    data,
    'Hydrogen Bond Acceptor Count',
    returnReferences,
  );
  return hydrogenBondAcceptorCount;
}

/**
 *
 *
 * @export
 * @param {Object} response of a compound data request to the PubChem API
 * @param {Object} options
 * @param {Boolean} options.returnReferences If true it also returns info about references, defaults to false.
 * @returns {ComputedData}
 */
export function getHydrogenBondDonorCount(data, options = {}) {
  const { returnReferences = false } = options;
  const hydrogenBondDonorCount = getNumberProperties(
    data,
    'Hydrogen Bond Donor Count',
    returnReferences,
  );
  return hydrogenBondDonorCount;
}
