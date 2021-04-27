import jp from 'jsonpath';

export function getFormula(data) {
  return jp.query(
    data,
    '$.Section[?(@.TOCHeading==="Names and Identifiers")]' +
      '.Section[?(@.TOCHeading==="Molecular Formula")]' +
      '.Information[0]',
  )[0].Value.StringWithMarkup[0].String;
}
