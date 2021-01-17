import jp from 'jsonpath';

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

  //ToDo(@kjappelbaum): For precautionary Statements just having the code is often not enough as the text contains the storage conditions
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
            /((?<!\+)P\d\d\d(?!\+))|(P\d\d\d\+P\d\d\d(?!\+))|(P\d\d\d\+P\d\d\d\+P\d\d\d(?!\+))/gm,
          );
          if (res) filtred.push(...res);
          return filtred;
        }, []),
    }));

  let uniquePictograms = allPictograms.reduce((newSet, entry) => {
    newSet.add(entry.pictograms);
    return newSet;
  }, new Set());

  let uniqueHCodes = allHCodes.reduce((newSet, entry) => {
    newSet.add(entry.hStatements);
    return newSet;
  }, new Set());

  let uniquePCodes = allPCodes.reduce((newSet, entry) => {
    newSet.add(entry.pStatements);
    return newSet;
  }, new Set());

  return {
    pictograms: uniquePictograms,
    hCodes: uniqueHCodes,
    pCodes: uniquePCodes,
    detail: {
      pictograms: allPictograms,
      hCodes: allHCodes,
      pCodes: allPCodes,
      refences: references,
    },
  };
}
