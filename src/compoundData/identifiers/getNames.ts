// Names and Identifiers

import jp from 'jsonpath';

import type { DataType } from '../CompoundData';

export function getNames(data: DataType) {
  return {
    value: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="InChI")]' +
        '.Information[0]',
    )[0].Value.StringWithMarkup[0].String,
    label: 'InChI',
    description: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="InChI")]',
    )[0].Description,
  };
}
