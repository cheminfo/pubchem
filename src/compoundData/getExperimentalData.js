import jp from 'jsonpath';
import Qty from 'js-quantities';
// import Qty from 'js-quantities/esm';

function getExperimentalDataSection(data) {
  const experimentalData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Experimental Properties")]',
  );
  return experimentalData;
}

//todo: the indexing i do is maybe a bit dangerous as we do not catch errors...
export function getBoilingPoint(data, options = {}) {
  const {
    returnDetails = false,
    returnReferences = false,
    toUnit = 'kelvin',
  } = options;
  const experimentalSection = getExperimentalDataSection(data);
  const boilingPointSectins = jp
    .query(
      experimentalSection[0],
      '$.Section[?(@.TOCHeading==="Boiling Point")].Information[*]',
    )
    .reduce((valueDict, entry) => {
      valueDict[entry.ReferenceNumber] = Qty.parse(
        jp
          .query(entry, '$.Value.StringWithMarkup[*].String')[0]
          .replace('°', 'deg'),
      ).to(toUnit).scalar;
      return valueDict;
    }, {});

  console.log(boilingPointSectins);
}
