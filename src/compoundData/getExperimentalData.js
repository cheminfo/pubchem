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

function parseFloatPropertiesFromStringWithMarkup(
  data,
  sectionName,
  targetUnit,
) {
  const experimentalSection = getExperimentalDataSection(data);
  const floatDict = jp
    .query(
      experimentalSection[0],
      `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
    )
    .reduce((valueDict, entry) => {
      valueDict[entry.ReferenceNumber] = Qty.parse(
        jp
          .query(entry, '$.Value.StringWithMarkup[*].String')[0]
          .replace('°', 'deg'), // because js-quantities does not know the symbol
      ).to(targetUnit).scalar;
      return valueDict;
    }, {});

  let output = {};
  output.summary = summarizeFloatData(floatDict);
  output.details = floatDict;
  return output;
}

function summarizeFloatData(object) {
  const values = Object.values(object);
  return {
    mean: mean(values),
    median: median(values),
    standardDeviation: standardDeviation(values),
  };
}

//todo: the indexing i do is maybe a bit dangerous as we do not catch errors...
export function getBoilingPoint(data, options = {}) {
  const {
    returnDetails = false,
    returnReferences = false,
    toUnit = 'kelvin',
  } = options;
  const boilingPointSections = parseFloatPropertiesFromStringWithMarkup(
    data,
    'Boiling Point',
    toUnit,
  );

  console.log(boilingPointSections);
}
