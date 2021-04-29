// Names and Identifiers

import jp from 'jsonpath';

export function getInChIKey(data) {
  return {
    value: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="InChI Key")]' +
        '.Information[0]',
    )[0].Value.StringWithMarkup[0].String,
    label: 'InChI Key',
    description: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="InChI Key")]',
    )[0].Description,
  };
}
