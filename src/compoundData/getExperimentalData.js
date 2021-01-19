import Qty from 'js-quantities';
import jp from 'jsonpath';
import mean from 'ml-array-mean';
import median from 'ml-array-median';
import standardDeviation from 'ml-array-standard-deviation';

import { getReferences } from './getReferences.js';

/**
 * @typedef {Object} ExperimentalData
 * @property {Object} summary
 * @property {Number} summary.mean - Mean of the entries that could be parsed to the selected unit
 * @property {Number} summary.median - Median of the entries that could be parsed to the selected unit
 * @property {Number} summary.standardDeviation - Standard deviation of the entries that could be parsed to the selected unit
 * @property {Object} details - Object which keys are the reference numbers and the values are the unmodified strings
 * @property {Object} references
 * @property {String} references.url -
 * @property {String} references.sourceName -
 * @property {String} references.name -
 * @property {String} references.description -
 */

/**
 * @typedef {Object} ExperimentalDataOptions
 * @property {Object} options
 * @property {Boolean} options.returnDetails - If true, returns the details. Defaults to false.
 * @property {Boolean} options.returnReferences - If true, returns the references. Defaults to false.
 * @property {String} options.toUnit - Target unit
 */

function getExperimentalDataSection(data) {
  const experimentalData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Experimental Properties")]',
  );
  return experimentalData;
}

function parseUnits(floatDict, targetUnit) {
  return Object.values(floatDict).reduce((outArray, elem) => {
    let res = Qty.parse(elem.replace('°', 'deg'));
    if (res) outArray.push(res.to(targetUnit).scalar);
    return outArray;
  }, []);
}

//todo: the indexing i do is maybe a bit dangerous as we do not have a lot of logic ...
function parseFloatPropertiesFromStringWithMarkup(
  data,
  sectionName,
  targetUnit,
  returnDetails = false,
  returnReferences = false,
) {
  try {
    const experimentalSection = getExperimentalDataSection(data);
    const floatDict = jp
      .query(
        experimentalSection[0],
        `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
      )
      .reduce((valueDict, entry) => {
        valueDict[entry.ReferenceNumber] = jp.query(
          entry,
          '$.Value.StringWithMarkup[*].String',
        )[0];
        return valueDict;
      }, {});

    let output = {};

    output.summary = summarizeFloatData(parseUnits(floatDict, targetUnit));
    if (returnDetails) output.details = floatDict;
    if (returnReferences) {
      const allReferences = getReferences(data);
      output.references = Object.keys(floatDict).reduce(
        (referenceDict, entry) => {
          referenceDict[entry] = allReferences[entry];
          return referenceDict;
        },
        {},
      );
    }
    return output;
  } catch (e) {
    throw Error(
      `Could not parse experimental section to floats. The error was ${e}`,
    );
  }
}

function summarizeFloatData(array) {
  return {
    mean: mean(array),
    median: median(array),
    standardDeviation: standardDeviation(array),
  };
}

/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {ExperimentalDataOptions} options toUnit defaults to kelvin
 * @returns {ExperimentalData}
 */
export function getBoilingPoint(data, options = {}) {
  const {
    returnDetails = false,
    returnReferences = false,
    toUnit = 'kelvin',
  } = options;
  const boilingPoint = parseFloatPropertiesFromStringWithMarkup(
    data,
    'Boiling Point',
    toUnit,
    returnDetails,
    returnReferences,
  );

  return boilingPoint;
}

/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {ExperimentalDataOptions} options toUnit defaults to kelvin
 * @returns {ExperimentalData}
 */
export function getMeltingPoint(data, options = {}) {
  const {
    returnDetails = false,
    returnReferences = false,
    toUnit = 'kelvin',
  } = options;
  const meltingPoint = parseFloatPropertiesFromStringWithMarkup(
    data,
    'Melting Point',
    toUnit,
    returnDetails,
    returnReferences,
  );

  return meltingPoint;
}

/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {ExperimentalDataOptions} options toUnit defaults to Pa
 * @returns {ExperimentalData}
 */
export function getVaporPressure(data, options = {}) {
  const {
    returnDetails = false,
    returnReferences = false,
    toUnit = 'Pa',
  } = options;
  const vaporPressure = parseFloatPropertiesFromStringWithMarkup(
    data,
    'Vapor Pressure',
    toUnit,
    returnDetails,
    returnReferences,
  );

  return vaporPressure;
}
/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {ExperimentalDataOptions} options toUnit defaults to M
 * @returns {ExperimentalData}
 */
export function getSolubility(data, options = {}) {
  const {
    returnDetails = false,
    returnReferences = false,
    toUnit = 'M',
  } = options;
  const solubility = parseFloatPropertiesFromStringWithMarkup(
    data,
    'Solubility',
    toUnit,
    returnDetails,
    returnReferences,
  );

  return solubility;
}

/**
 *
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @param {ExperimentalDataOptions} options toUnit defaults to M
 * @returns {ExperimentalData}
 */
export function getFlashPoint(data, options = {}) {
  const {
    returnDetails = false,
    returnReferences = false,
    toUnit = 'kelvin',
  } = options;
  const solubility = parseFloatPropertiesFromStringWithMarkup(
    data,
    'Flash Point',
    toUnit,
    returnDetails,
    returnReferences,
  );

  return solubility;
}
