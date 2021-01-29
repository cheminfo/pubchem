import jp from 'jsonpath';

import { getReferences } from './getReferences.js';
import { ghsPictogramText } from './ghsPictograms.js';
import { hazardStatements } from './hazardStatements.js';
import { precautionaryStatements } from './precautionaryStatements.js';

/**
 * @typedef {Object} GHSData
 * @property {Object} summary
 * @property {Array<String>} summary.pictograms - Array of unique GHS pictogram names, e.g., ["GHS01", "GHS02"]
 * @property {Array<String>} summary.hStatements - Array of unique hStatements, e.g., ["H226", "H315"]
 * @property {Array<String>} summary.hStatements - Array of unique hStatements, e.g., ["Flammable liquid and vapour", "Causes skin irritation"]
 * @property {Array<String>} summary.pStatements - Array of unique pStatements, e.g., ["P210", "P233"]
 * @property {Array<String>} summary.pStatements - Array of unique pStatements, e.g., ["Keep away from heat, hot surfaces, sparks, open flames and other ignition sources. No smoking. [As modified by IV ATP]"]
 * @property {Object} details
 * @property {Object.<string, Array<String>} details.pictograms - Keys are the reference numbers, values arrays of GHS pictograms reported by reference
 * @property {Object.<string, Array<String>} details.hStatements - Keys are the reference numbers, values arrays of H codes reported by reference
 * @property {Object.<string, Array<String>} details.pStatements -Keys are the reference numbers, values arrays of P codes reported by reference
 * @property {Object} references
 * @property {String} references.url -
 * @property {String} references.sourceName -
 * @property {String} references.name -
 * @property {String} references.description -
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

  let pictograms = jp
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

  let hStatements = jp
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

  //ToDo(kjappelbaum): investigate in more detail why they do not have the full P statements
  //For P statements the full sentence (with conditions) is more important than just the number
  let pStatements = jp
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
