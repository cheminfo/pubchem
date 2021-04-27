// Names and Identifiers

import jp from 'jsonpath';

export function getInChI(data) {
  return jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
      '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
      '.Section[?(@.TOCHeading==="InChI")]' +
      '.Information[0]',
  )[0].Value.StringWithMarkup[0].String;
}
