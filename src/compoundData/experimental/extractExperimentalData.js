import jp from 'jsonpath';

import { getReferences } from '../getReferences.js';

export function extractExperimentalData(data, sectionName, options = {}) {
  const { parser } = options;
  const references = getReferences(data);

  const experimentalSection = getExperimentalDataSection(data);

  let results = [];

  if (!experimentalSection || experimentalSection.length === 0) {
    return results;
  }

  jp.query(
    experimentalSection[0],
    `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
  ).forEach((entry) => {
    jp.query(entry, '$.Value.StringWithMarkup[*].String').forEach(
      (original) => {
        let result = {
          reference: references[entry.ReferenceNumber],
          data: { original },
        };
        if (parser) {
          try {
            result.data.parsed = parser(original, options);
          } catch (e) {
            result.data.parsed = {
              error: e.toString(),
            };
          }
        }
        results.push(result);
      },
    );
  });
  return results;
}

export function getExperimentalDataSection(data) {
  const experimentalData = jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Chemical and Physical Properties")]' +
      '.Section[?(@.TOCHeading==="Experimental Properties")]',
  );
  return experimentalData;
}
