import jp from 'jsonpath';

import { DataType } from '../CompoundData.js';
import { getReferences } from '../getReferences.js';

import { ghsPictogramText } from './ghsPictograms.js';
import { hazardStatements } from './hazardStatements.js';
import { precautionaryStatements } from './precautionaryStatements.js';

interface ReferenceData {
  /**
   * URL to the source
   * @type {string}
   */
  url: string;
  /**
   * Name of the source
   * @type {string}
   */
  sourceName: string;
  /**
   * Name of the reference
   * @type {string}
   */
  name: string;
  /**
   * Description of the reference
   * @type {string}
   */
  description: string;
}

interface StatementData {
  /**
   * Code of the statement
   * @type {string}
   */
  code: string;
  /**
   * Text description of the statement
   * @type {string}
   */
  description: string;
}

interface SafteyData {
  /**
   * Reference to the source of the data
   * @type {ReferenceData}
   */
  references: ReferenceData;
  /**
   * Data of the statement
   * @type {StatementData}
   */
  data: StatementData;
}

export interface GHSData {
  /**
   * Pictograms of the compound
   * @type {Array<SafteyData>}
   */
  pictograms: Array<SafteyData>;
  /**
   * Hazard statements of the compound
   * @type {Array<SafteyData>}
   */
  hStatements: Array<SafteyData>;
  /**
   * Precautionary statements of the compound
   * @type {Array<SafteyData>}
   */
  pStatements: Array<SafteyData>;
}

/**
 * Extracts GHS information (H/P-Statements and pictograms)
 * @param data The data to extract from
 * @return The extracted data
 */
export function getGHS(data: DataType): GHSData {
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
