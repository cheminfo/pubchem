// Names and Identifiers

import jp from 'jsonpath';

import type { DataType } from '../CompoundData';

export function getInChIKey(data: DataType) {
  return {
    value: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="InChIKey")]' +
        '.Information[0]',
    )[0].Value.StringWithMarkup[0].String,
    label: 'InChIKey',
    description: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="InChIKey")]',
    )[0].Description,
  };
}
