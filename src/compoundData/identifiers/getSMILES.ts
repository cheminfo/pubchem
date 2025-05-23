// Names and Identifiers

import jp from 'jsonpath';

import type { DataType } from '../CompoundData';

export function getSMILES(data: DataType) {
  return {
    value: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="SMILES")]' +
        '.Information[0]',
    )[0].Value.StringWithMarkup[0].String,
    label: 'SMILES',
    description: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="SMILES")]',
    )[0].Description,
  };
}
