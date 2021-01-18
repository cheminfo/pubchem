import jp from 'jsonpath';

export function getGHS(data) {
  // TODO: we could extract other GHS information
  let pictograms = jp
    .query(
      data,
      '$.Section[?(@.TOCHeading==="Safety and Hazards")]' +
        '.Section[?(@.TOCHeading==="Hazards Identification")]' +
        '.Section[?(@.TOCHeading==="GHS Classification")]' +
        '.Information[?(@.Name==="Pictogram(s)")]' +
        '.Value.StringWithMarkup[*].Markup[*]',
    )
    .map((entry) => ({
      label: entry.Extra,
      value: entry.URL.replace(/.*(?<code>GHS..).*/, '$<code>'),
      url: entry.URL,
    }));
  return {
    pictograms,
  };
}
