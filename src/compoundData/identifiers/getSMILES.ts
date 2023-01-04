// Names and Identifiers

import jp from 'jsonpath';

import { DataType } from '../CompoundData';

export function getSMILES(data: DataType) {
  return {
    value: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="Canonical SMILES")]' +
        '.Information[0]',
    )[0].Value.StringWithMarkup[0].String,
    label: 'Canonical SMILES',
    description: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Computed Descriptors")]' +
        '.Section[?(@.TOCHeading==="Canonical SMILES")]',
    )[0].Description,
  };
}
