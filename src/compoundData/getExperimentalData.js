import Qty from 'js-quantities';
import jp from 'jsonpath';
import mean from 'ml-array-mean';
import median from 'ml-array-median';
import standardDeviation from 'ml-array-standard-deviation';

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
    let res = Qty.parse(elem.replace('°', 'deg')).to(targetUnit).scalar;
    if (res) outArray.push(res);
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

    output.summary = summarizeFloatData(parseUnits(floatDict));
    if (returnDetails) output.details = floatDict;
    if (returnReferences) output.references = floatDict;
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
