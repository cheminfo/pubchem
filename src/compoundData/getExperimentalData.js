import jp from 'jsonpath';

function getExperimentalDataSection(data) {
  const experimentalData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Experimental Properties")]',
  );
  return experimentalData;
}

export function getExperimentalLogP(data, options = {}) {
  const { returnDetails = false, returnReferences = false } = options;

  const experimentalSection = getExperimentalDataSection(data);
  console.log(experimentalSection);
}
