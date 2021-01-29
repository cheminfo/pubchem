import jp from 'jsonpath';

import { getReferences } from './getReferences.js';
import { hazardStatements } from './hazardStatements.js';
import { precautionaryStatements } from './precautionaryStatements.js';

/**
 *Remove duplicates objects of arrays via set
 *
 * @param {Object} object
 * @returns Array flat list without duplicates
 */
function removeDuplicates(object) {
  return [
    ...Object.values(object).reduce((newSet, entry) => {
      entry.forEach(newSet.add, newSet);
      return newSet;
    }, new Set()),
  ];
}

/**
 * @typedef {Object} GHSData
 * @property {Object} summary
 * @property {Array.<String>} summary.pictograms - Array of unique GHS pictogram names, e.g., ["GHS01", "GHS02"]
 * @property {Array.<String>} summary.hCodes - Array of unique hCodes, e.g., ["H226", "H315"]
 * @property {Array.<String>} summary.hStatements - Array of unique hStatements, e.g., ["Flammable liquid and vapour", "Causes skin irritation"]
 * @property {Array.<String>} summary.pCodes - Array of unique pCodes, e.g., ["P210", "P233"]
 * @property {Array.<String>} summary.pStatements - Array of unique pStatements, e.g., ["Keep away from heat, hot surfaces, sparks, open flames and other ignition sources. No smoking. [As modified by IV ATP]"]
 * @property {Object} details
 * @property {Object.<string, Array.<String>} details.pictograms - Keys are the reference numbers, values arrays of GHS pictograms reported by reference
 * @property {Object.<string, Array.<String>} details.hCodes - Keys are the reference numbers, values arrays of H codes reported by reference
 * @property {Object.<string, Array.<String>} details.pCodes -Keys are the reference numbers, values arrays of P codes reported by reference
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
 * @param {Object} options
 * @param {Boolean} options.returnDetails if true also return a detailed results (H/P statements and pictograms for every reference). Defaults to false.
 * @param {Boolean} options.returnReferences if true also return the bioliographic details of the relevant references. Defaults to false.
 * @returns {GHSData}
 */
export function getGHS(data, options = {}) {
  const { returnDetails = false, returnReferences = false } = options;

  let allPictograms = jp
    .query(
      data,
      '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
      '.Section[?(@.TOCHeading==="Hazards Identification")]' +
      '.Section[?(@.TOCHeading==="GHS Classification")]' +
      '.Information[?(@.Name==="Pictogram(s)")]',
    )
    .reduce((pictogramDict, entry) => {
      pictogramDict[entry.ReferenceNumber] = jp
        .query(entry, '$.Value.StringWithMarkup[*].Markup[*]')
        .map((entry) => entry.URL.match(/GHS\d+/)[0]);
      return pictogramDict;
    }, {});

  let allHCodes = jp
    .query(
      data,
      '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
      '.Section[?(@.TOCHeading==="Hazards Identification")]' +
      '.Section[?(@.TOCHeading==="GHS Classification")]' +
      '.Information[?(@.Name==="GHS Hazard Statements")]',
    )
    .reduce((hCodeDict, entry) => {
      hCodeDict[entry.ReferenceNumber] = jp
        .query(entry, '$.Value.StringWithMarkup[*]')
        .map((entry) => entry.String.match(/H\d+/)[0]);
      return hCodeDict;
    }, {});

  //ToDo(kjappelbaum): investigate in more detail why they do not have the full P statements
  //For P statements the full sentence (with conditions) is more important than just the number
  let allPCodes = jp
    .query(
      data,
      '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
      '.Section[?(@.TOCHeading==="Hazards Identification")]' +
      '.Section[?(@.TOCHeading==="GHS Classification")]' +
      '.Information[?(@.Name==="Precautionary Statement Codes")]',
    )
    .reduce((pCodeDict, entry) => {
      pCodeDict[entry.ReferenceNumber] = jp
        .query(entry, '$.Value.StringWithMarkup[*]')
        .reduce((filtered, entry) => {
          let res = entry.String.match(
            /(?<oneP>(?<!\+)P\d\d\d(?!\+))|(?<twoP>P\d\d\d\+P\d\d\d(?!\+))|(?<threeP>P\d\d\d\+P\d\d\d\+P\d\d\d(?!\+))/gm,
          );
          if (res) filtered.push(...res);
          return filtered;
        }, []);
      return pCodeDict;
    }, {});
  const uniquePictograms = removeDuplicates(allPictograms);

  let relevantReferences = new Set();

  [allPictograms, allHCodes, allPCodes].forEach((list) =>
    Object.keys(list).forEach(relevantReferences.add, relevantReferences),
  );

  const uniqueHCodes = removeDuplicates(allHCodes);

  const uniquePCodes = removeDuplicates(allPCodes);

  const references = getReferences(data);

  let h = uniqueHCodes.reduce((hStatementList, entry) => {
    hStatementList.push({ code: entry, statement: hazardStatements[entry] });
    return hStatementList;
  }, []);

  let p = uniquePCodes.reduce((pStatementList, entry) => {
    pStatementList.push({
      code: entry,
      statement: precautionaryStatements[entry],
    });
    return pStatementList;
  }, []);

  let output = {
    summary: {
      pictograms: uniquePictograms,
      h: h,
      p: p,
    },
  };

  if (returnDetails) {
    output.details = {
      pictograms: allPictograms,
      hCodes: allHCodes,
      pCodes: allPCodes,
    };
  }

  if (returnReferences) {
    output.references = Object.keys(references)
      .filter((key) => relevantReferences.has(key))
      .reduce((obj, key) => {
        obj[key] = references[key];
        return obj;
      }, {});
  }
  return output;
}
