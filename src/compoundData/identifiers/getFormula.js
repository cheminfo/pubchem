import jp from 'jsonpath';

export function getFormula(data) {
  return {
    value: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Molecular Formula")]' +
        '.Information[0]',
    )[0].Value.StringWithMarkup[0].String,
    label: 'Molecular Formula',
    description: jp.query(
      data,
      '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
        '.Section[?(@.TOCHeading==="Molecular Formula")]',
    )[0].Description,
  };
}
