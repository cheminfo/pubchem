import jp from 'jsonpath';

export function getComputedPropertySection(data, sectionName) {
  return jp.query(
    data,
    `$.Section[?(@.TOCHeading==="${sectionName}")].Information[*]`,
  );
}
