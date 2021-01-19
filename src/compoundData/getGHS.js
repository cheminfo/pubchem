import jp from 'jsonpath';

import { harzardStatements } from './hazardStatements.js';
import { precautionaryStatements } from './precautionaryStatements.js';
/**
 *Remove duplicates from array of objects which contain objects via set
 *
 * @param {Array[Object[Array]]} array input array
 * @param {String} keyName key used to access the inner arrays
 * @returns Array flat list without duplicates
 */
function removeDuplicates(array, keyName) {
  return [
    ...array.reduce((newSet, entry) => {
      entry[keyName].forEach(newSet.add, newSet);
      return newSet;
    }, new Set()),
  ];
}

/**
 * @typedef {Object} GHSData
 * @property {Array[String]} pictograms - Array of unique GHS pictogram names, e.g., ["GHS01", "GHS02"]
 * @property {Array[String]} hCodes - Array of unique hCodes, e.g., ["H226", "H315"]
 * @property {Array[String]} hStatements - Array of unique hStatements, e.g., ["Flammable liquid and vapour", "Causes skin irritation"]
 * @property {Array[String]} pCodes - Array of unique pCodes, e.g., ["P210", "P233"]
 * @property {Array[String]} pStatements - Array of unique pStatements, e.g., ["Keep away from heat, hot surfaces, sparks, open flames and other ignition sources. No smoking. [As modified by IV ATP]"]
 * @property {Object} detail
 * @property {Array[Object]} detail.pictograms - Array of objects containing the keys referenceNumber and pictograms
 */

/**
 *Extracts GHS information (H/P-Statements and pictograms)
 *
 * @export
 * @param {Object} data response of a compound data request to the PubChem API
 * @returns {GHSData}
 */
export function getGHS(data) {
  let allPictograms = jp
    .query(
      data,
      '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
        '.Section[?(@.TOCHeading==="Hazards Identification")]' +
        '.Section[?(@.TOCHeading==="GHS Classification")]' +
        '.Information[?(@.Name==="Pictogram(s)")]',
    )
    .map((entry) => ({
      referenceNumber: entry.ReferenceNumber,
      pictograms: jp
        .query(entry, '$.Value.StringWithMarkup[*].Markup[*]')
        .map((entry) => entry.URL.match(/GHS\d+/)[0]),
    }));

  let references = jp.query(data, '$.Reference[*]').reduce((ref, entry) => {
    ref[entry.ReferenceNumber] = {
      url: entry.URL,
      sourceName: entry.SourceName,
      name: entry.Name,
      description: entry.Description,
    };
    return ref;
  }, {});

  let allHCodes = jp
    .query(
      data,
      '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
        '.Section[?(@.TOCHeading==="Hazards Identification")]' +
        '.Section[?(@.TOCHeading==="GHS Classification")]' +
        '.Information[?(@.Name==="GHS Hazard Statements")]',
    )
    .map((entry) => ({
      referenceNumber: entry.ReferenceNumber,
      hStatements: jp
        .query(entry, '$.Value.StringWithMarkup[*]')
        .map((entry) => entry.String.match(/H\d+/)[0]),
    }));

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
    .map((entry) => ({
      referenceNumber: entry.ReferenceNumber,
      pStatements: jp
        .query(entry, '$.Value.StringWithMarkup[*]')
        .reduce((filtred, entry) => {
          let res = entry.String.match(
            /(?<oneP>(?<!\+)P\d\d\d(?!\+))|(?<twoP>P\d\d\d\+P\d\d\d(?!\+))|(?<threeP>P\d\d\d\+P\d\d\d\+P\d\d\d(?!\+))/gm,
          );
          if (res) filtred.push(...res);
          return filtred;
        }, []),
    }));

  let uniquePictograms = removeDuplicates(allPictograms, 'pictograms');

  let uniqueHCodes = removeDuplicates(allHCodes, 'hStatements');

  let uniquePCodes = removeDuplicates(allPCodes, 'pStatements');

  return {
    pictograms: uniquePictograms,
    hCodes: uniqueHCodes,
    hStatements: uniqueHCodes.reduce((hStatementList, entry) => {
      hStatementList.push(harzardStatements[entry]);
      return hStatementList;
    }, []),
    pCodes: uniquePCodes,
    pStatements: uniquePCodes.reduce((pStatementList, entry) => {
      pStatementList.push(precautionaryStatements[entry]);
      return pStatementList;
    }, []),
    detail: {
      pictograms: allPictograms,
      hCodes: allHCodes,
      pCodes: allPCodes,
      references: references,
    },
  };
}
