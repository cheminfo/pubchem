import jp from 'jsonpath';

import { getReferences } from '../getReferences.js';

import { ghsPictogramText } from './ghsPictograms.js';
import { hazardStatements } from './hazardStatements.js';
import { precautionaryStatements } from './precautionaryStatements.js';

/**
 * @typedef {Object} ReferenceData
 * @property {String} url
 * @property {String} sourceName
 * @property {String} name
 * @property {String} description
 */

/**
 * @typedef {Object} StatementData
 * @property {String} code
 * @property {String} description
 */

/**
 * @typedef {Object} SafteyData
 * @property {ReferenceData} references
 * @property {StatementData} data
 */

/**
 * @typedef {Object} GHSData
 * @property {Array<SafteyData>} pictograms
 * @property {Array<SafteyData>} hStatements
 * @property {Array<SafteyData>} pStatements
 */

/**
 *Extracts GHS information (H/P-Statements and pictograms)
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @returns {GHSData}
 */
export function getGHS(data) {
  const references = getReferences(data);
  let pictograms;
  try {
    pictograms = jp
      .query(
        data,
        '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
          '.Section[?(@.TOCHeading==="Hazards Identification")]' +
          '.Section[?(@.TOCHeading==="GHS Classification")]' +
          '.Information[?(@.Name==="Pictogram(s)")]',
      )
      .map((entry) => ({
        reference: references[entry.ReferenceNumber],
        data: jp
          .query(entry, '$.Value.StringWithMarkup[*].Markup[*]')
          .map((entry) => {
            let code = entry.URL.match(/GHS\d+/)[0];
            return {
              code,
              description: ghsPictogramText[code],
            };
          }),
      }));
  } catch (error) {
    pictograms = [];
  }

  let hStatements;

  try {
    hStatements = jp
      .query(
        data,
        '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
          '.Section[?(@.TOCHeading==="Hazards Identification")]' +
          '.Section[?(@.TOCHeading==="GHS Classification")]' +
          '.Information[?(@.Name==="GHS Hazard Statements")]',
      )
      .map((entry) => ({
        reference: references[entry.ReferenceNumber],
        data: jp
          .query(entry, '$.Value.StringWithMarkup[*]')
          .map((entry) => entry.String.match(/H\d+/)[0])
          .map((hCode) => ({
            code: hCode,
            description: hazardStatements[hCode],
          })),
      }));
  } catch (error) {
    hStatements = [];
  }

  //ToDo(kjappelbaum): investigate in more detail why they do not have the full P statements
  //For P statements the full sentence (with conditions) is more important than just the number
  let pStatements;
  try {
    pStatements = jp
      .query(
        data,
        '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
          '.Section[?(@.TOCHeading==="Hazards Identification")]' +
          '.Section[?(@.TOCHeading==="GHS Classification")]' +
          '.Information[?(@.Name==="Precautionary Statement Codes")]',
      )
      .map((entry) => ({
        reference: references[entry.ReferenceNumber],
        data: jp
          .query(entry, '$.Value.StringWithMarkup[*]')
          .map((entry) =>
            entry.String.match(
              /(?<oneP>(?<!\+)P\d\d\d(?!\+))|(?<twoP>P\d\d\d\+P\d\d\d(?!\+))|(?<threeP>P\d\d\d\+P\d\d\d\+P\d\d\d(?!\+))/gm,
            ),
          )[0]
          .map((pCode) => ({
            code: pCode,
            description: precautionaryStatements[pCode],
          })),
      }));
  } catch (error) {
    pStatements = [];
  }

  return {
    pictograms,
    hStatements,
    pStatements,
  };
}

/**
 * We combine all the results and keep
 */
export function getGHSSummary(data) {
  let result = getGHS(data);
  return {
    pictograms: getUnique(result.pictograms),
    hStatements: getUnique(result.hStatements),
    pStatements: getUnique(result.pStatements),
  };
}

function getUnique(entries) {
  let uniqueMap = {};
  entries.map((entry) =>
    entry.data.forEach((line) => {
      uniqueMap[line.code] = line;
    }),
  );
  return Object.keys(uniqueMap)
    .map((code) => uniqueMap[code])
    .sort((a, b) => (a.code < b.code ? -1 : 1));
}
